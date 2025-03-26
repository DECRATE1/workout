import Line from "./Line";
import Point from "./Point";

export default function ProgressCoordinatePlane() {
  const data = {
    "01-02-23": "10",
    "02-02-23": "200",
    "03-02-23": "0",
    "04-02-23": "5",
    "05-02-23": "1",
    "06-02-23": "50",
    "07-02-23": "100",
  };

  const x = Object.keys(data);
  const y = Object.values(data);
  const dataY = Array.from(new Set(y));
  const indexY = y.map(
    (item) => 7 - dataY.sort((a, b) => +b - +a).indexOf(item)
  );

  /*console.log(Math.atan(2) * (180 / Math.PI));
  console.log(Math.sqrt(5) * (380 / 7));
  console.log(Math.ceil(-63.434948822922019));*/

  //линия

  //точка

  return (
    <div className="w-fit h-fit flex scale-140">
      <div className="flex flex-col">
        {dataY
          .sort((a, b) => +b - +a)
          .map((num) => {
            return (
              <span className="text-white text-[10px] font-bold uppercase self-start mr-1 flex items-center size-[54px] justify-end">
                {num}
              </span>
            );
          })}
      </div>

      <div>
        {
          <div className="w-[380px] h-[380px] border-l-2 border-red-600 border-b-2 grid grid-cols-7 grid-rows-7 gap-0 relative">
            {indexY.map((i, index) => {
              return (
                <Point x={index + 1} y={+i}>
                  <Line
                    catheterOne={Math.abs(+i - indexY[index + 1])}
                    catheterTwo={1}
                    minusOrPlus={+i - indexY[index + 1] < 0 ? true : false}
                  ></Line>
                </Point>
              );
            })}
          </div>
        }

        <div className="flex">
          {x
            .sort((a, b) => +b - +a)
            .map((num) => {
              return (
                <span className="text-white text-[10px] font-bold uppercase flex size-[54px] justify-center">
                  {num}
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
}
