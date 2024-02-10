import ReactDOM from 'react-dom';
interface PlaceAlertProps {
  place: string
  onOpen: () => void
  onClose: () => void
}

const PlaceAlert: React.FC<PlaceAlertProps> = ({ place, onOpen, onClose }) => {
  return ReactDOM.createPortal(
    (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
        <div className="relative top-96 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              '{place}'を達成済みにしますか？
            </h3>
            <div className="items-center px-4 py-3 flex justify-center gap-7">
              <button onClick={onOpen} className="btn btn-primary">
                はい
              </button>
              <button onClick={onClose} className="btn btn-secondary">
                いいえ
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
    document.getElementById('modal-root')!
  );
}

export default PlaceAlert
