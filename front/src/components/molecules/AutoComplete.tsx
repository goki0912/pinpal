import React, { useEffect, useRef } from 'react';

interface AutocompleteProps {
  name : string;
  form_name : string;
  onSelectPlace: (lat: number, lng: number) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({name, form_name, onSelectPlace }) => {
  const inputRef = useRef(null); // input要素への参照を保持

  useEffect(() => {
    if (window.google && window.google.maps && window.google.maps.places && inputRef.current) {
      const center = { lat: 50.064192, lng: -130.605469 };
      const defaultBounds = {
        north: center.lat + 0.1,
        south: center.lat - 0.1,
        east: center.lng + 0.1,
        west: center.lng - 0.1,
      };
      
      const options = {
        bounds: defaultBounds,
        fields: ["address_components", "geometry", "icon", "name"],
        strictBounds: false,
        types: ["establishment"],
      };

      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, options);
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }
        const lat = place.geometry.location.lat() ;
        const lng = place.geometry.location.lng();
        onSelectPlace(lat, lng);
      });
    }
  }, []);

  return (
    <div className="m-5">
    <label className="block mb-2 text-sm font-medium text-gray-900">{name}</label>
    <input
      ref={inputRef} 
      name={form_name}
      id="pac-input"
      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="Add a location"
    />
    </div>
  );
};

export default Autocomplete;
