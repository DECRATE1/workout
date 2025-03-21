export default function ProgressCoordinatePlane() {
  const data = {
    "01-02-23": "10",
    "02-02-23": "1",
    "03-02-23": "100",
    "04-02-23": "0",
    "05-02-23": "6",
    "06-02-23": "10",
    "07-02-23": "10",
  };
  return (
    <>
      <div className="w-96 h-96 border-l-2 border-red-600 border-b-2 grid grid-cols-7 grid-rows-7 gap-0">
        <span className="col-start-0 row-start-7 w-full h-full flex items-center justify-center">
          <div className="size-1 bg-white rounded-full"></div>
        </span>
      </div>
    </>
  );
}
