import Image from "next/image";
import tiantan from "@/public/tiantan.png"
import {GlobeEuropeAfricaIcon, MapPinIcon, QuestionMarkCircleIcon} from "@heroicons/react/24/outline";

export default function NFC() {

  const archData = [
    {
      name: "天坛",
      brief: "中国现存最大的古代祭祀性建筑群",
      image: tiantan,
      description: "天坛始建于明永乐十八年(1420年)，命名为“天坛”于明嘉靖九年(1530年)。天坛由两重坛墙环护，主要古建筑集中于内坛。内坛中间有东 西向隔墙将内坛分隔为南、北两部分，隔墙中有门相通。内坛由圜丘平台、斋宫和祈谷坛三组古建筑群组成。圜丘平台和斋宫通过360米长的 丹陛桥连接。天坛具有较高的历史价值、科学价值和独特的艺术价值，且有深刻的文化内涵。",
      knowledgepoint: "天坛有五个平台，每个平台代表不同步伐天上。这些平台用于皇帝进行仪式和供物，以求神灵的庇护。最上面的平台是圆形是皇帝祭祀用的最高点。"
    },
  ]

  return (
    <>
      <div className="bg-white m-4 rounded-2xl shadow-2xl shadow-orange-900 text-orange-900 overflow-hidden">
        <Image src={archData[0].image} alt={archData[0].name} className=""/>
        <div className="flex flex-col m-6 gap-4">
          <div className="flex flex-col gap-3">
            <div className="text-5xl font-bold">
              {archData[0].name}
            </div>
            <div className="flex gap-1 items-center">
              <GlobeEuropeAfricaIcon className="h-6 w-6"/>
              <div className="text-lg">
                {archData[0].brief}
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-sm opacity-80">
              {archData[0].description}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-center">
              <QuestionMarkCircleIcon className="h-6 w-6"/>
              <div className="text-lg font-bold">
                你知道吗
              </div>
            </div>
            <div>
              {archData[0].knowledgepoint}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-center">
              <MapPinIcon className="h-6 w-6"/>
              <div className="text-lg font-bold">
                位置
              </div>
            </div>
            <div>
              北京市东城区天坛东里1号
            </div>
          </div>
        </div>
      </div>
    </>
  )
}