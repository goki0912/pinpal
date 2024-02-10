interface PlaceAlertProps {
  place: string
  onClick: () => void
}

const PlaceAlert: React.FC<PlaceAlertProps> = ({ place, onClick }) => {
  return (
    <div
      id="alert-additional-content-5"
      className="p-4 border border-gray-300 rounded-lg bg-gray-50 d-flex w-4/5 mx-auto mt-10 flex flex-col text-center h-40 items-center justify-center"
      role="alert"
    >
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-800 mb-5">
          '{place}'を達成済みにしますか？
        </h3>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="w-24 text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center justify-center"
        >
          はい
        </button>
        <button
          type="button"
          className="w-24 text-gray-800 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center"
          data-dismiss-target="#alert-additional-content-5"
          aria-label="Close"
        >
          いいえ
        </button>
      </div>
    </div>
  )
}

export default PlaceAlert
