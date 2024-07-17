import {ArrowPathIcon, BoltIcon, ChartBarSquareIcon, ClockIcon, FireIcon, MapIcon} from "@heroicons/react/24/outline";
import {PauseCircleIcon} from "@heroicons/react/24/solid";
import direction from "@/public/direction.png"
import Image from "next/image";

export default function Walk() {
  return (
    <>
      <div className="flex flex-col m-4 space-y-4 ">
        <Header/>
        <Image src={direction} alt={"Map"} className="rounded-3xl shadow-2xl shadow-orange-900/40"/>
        <Footer/>
      </div>
    </>
  )
}

function Header() {
  return (
    <div className="flex text-orange-900 bg-white rounded-3xl shadow-2xl shadow-orange-900/40 p-4">
      <div className="flex space-x-4 w-full">
        <MapIcon className="w-16 h-16"/>
        <div className="flex flex-col w-full">
          <div className="opacity-60 text-sm">
            目前位置
          </div>
          <div className="font-bold text-lg">
            正在 {"正阳门"} 附近
          </div>
          <div className="relative">
            <div className="mt-1.5 bg-gray-200 h-1 w-full rounded-full">
              <div className="h-1 rounded-full bg-orange-900/80 w-1/2 transition-all ease-in-out duration-500 animate-pulse"/>
            </div>
            <div className="absolute inset-0 mt-1.5 flex items-center justify-evenly">
              <div className="h-2 w-2 rounded-full bg-orange-900"/>
              <div className="h-2 w-2 rounded-full bg-orange-900"/>
              <div className="h-2 w-2 rounded-full bg-orange-900"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Footer() {

  const weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  const now = new Date();
  let day = weekday[now.getDay()];

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex gap-2 justify-evenly">
        <div
          className="basis-1/3 flex flex-col items-center text-orange-900 bg-white rounded-3xl p-3 shadow-2xl shadow-orange-900/40">
          <BoltIcon className="w-10 h-10 text-blue-800 bg-blue-200 rounded-full p-2 my-1"/>
          <div className="font-bold">
            {8}km/h
          </div>
          <div className="opacity-60 text-sm">
            平均速度
          </div>
        </div>
        <div
          className="basis-1/3 flex flex-col items-center text-orange-900 bg-white rounded-3xl p-3 shadow-2xl shadow-orange-900/40">
          <FireIcon className="w-10 h-10 text-red-800 bg-red-200 rounded-full p-2 my-1"/>
          <div className="font-bold">
            {200}KCal
          </div>
          <div className="opacity-60 text-sm">
            卡路里
          </div>
        </div>
        <div
          className="basis-1/3 flex flex-col items-center text-orange-900 bg-white rounded-3xl p-3 shadow-2xl shadow-orange-900/40">
          <ArrowPathIcon className="w-10 h-10 text-green-800 bg-green-200 rounded-full p-2 my-1"/>
          <div className="font-bold">
            {42}%
          </div>
          <div className="opacity-60 text-sm">
            完成度
          </div>
        </div>
      </div>
      <div
        className="flex flex-row justify-between items-center w-full text-orange-900 bg-white rounded-3xl shadow-2xl shadow-orange-900/40 p-4">
        <div className="flex flex-col space-y-1">
          <div className="flex space-x-2 opacity-60">
            <ChartBarSquareIcon className="w-6 h-6"/>
            <div>
              时间
            </div>
          </div>
          <div className="font-bold text-xl">
            {`2小时20分钟55秒`}
          </div>
          <div className="flex space-x-2">
            <div className="opacity-60 text-sm">
              {`2.5KM`}
            </div>
            <div className="flex items-center space-x-1 opacity-60 text-sm">
              <ClockIcon className="w-4 h-4"/>
              <div>
                {`${now.getMonth() + 1}月${now.getDate()}日 ${day} ${now.getHours()}:${("0" + now.getMinutes()).slice(-2)}`}
              </div>
            </div>
          </div>
        </div>
        <PauseCircleIcon className="h-16"/>
      </div>
    </div>
  )
}
