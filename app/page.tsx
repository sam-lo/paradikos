'use client'
import {useState} from 'react'
import {Listbox, ListboxButton, ListboxOption, ListboxOptions} from '@headlessui/react'
import user from "@/public/user.jpg"
import Image from "next/image";
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import {
  ArrowPathIcon,
  ArrowTopRightOnSquareIcon,
  CheckIcon,
  ChevronUpIcon,
  ClockIcon,
  MapIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  TrophyIcon
} from "@heroicons/react/24/outline";
import {locations} from "@/app/data/locations";
import {trophies} from "@/app/data/trophies";

export default function Home() {
  return (
    <>
      <div className="flex-col space-y-3 m-4">
        <Header/>
        <RouteSearch/>
        <FunFact/>
        <TodayDistance/>
        <Collection/>
      </div>
    </>
  )
}

function Header() {

  const weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  const now = new Date();
  let day = weekday[now.getDay()];

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col text-orange-900">
        <div className="opacity-80">
          {`${now.getMonth() + 1}月${now.getDate()}日 ${day}`}
        </div>
        <div className="text-4xl">
          {"概况"}
        </div>
      </div>
      <Image src={user} alt={"User Profile Picture"} className="w-16 h-16 rounded-full"/>
    </div>
  )
}

function FunFact() {

  const fact = "天安门原名“承天门”，取“承天启运、受命于天”之意，当时天安门是一座三层楼的五洞牌坊。天安门命运多舛，曾遭雷击起火被焚，也因李自成攻占京城被毁。"

  return (
    <>
      <div className="bg-white text-orange-900 flex-col rounded-3xl p-4 shadow-xl shadow-orange-900/40">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <QuestionMarkCircleIcon className="h-6 w-6"/>
              <div className="text-lg">
                你知道吗
              </div>
            </div>
            <a href="/nfc" className="flex space-x-2 items-center">
              <div>
                了解更多
              </div>
              <ArrowTopRightOnSquareIcon className="w-4 h-4"/>
            </a>
          </div>
          <div className="opacity-80">
            {fact}
          </div>
        </div>
      </div>
    </>
  )
}

function RouteSearch() {

  const [from, setFrom] = useState(locations[1])
  const [to, setTo] = useState(locations[2])

  return (
    <div className="bg-white  text-orange-900 flex-col space-y-4 rounded-3xl p-4 shadow-xl shadow-orange-900/40">
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <MapIcon className="w-6 h-6"/>
          <div className="text-lg">
            寻觅你的路线
          </div>
        </div>
        <ArrowPathIcon className="w-6 h-6"/>
      </div>
      <div className="flex space-x-2">
        <div className="flex flex-col space-y-2 basis-1/2">
          <div>
            由：
          </div>
          <Listbox value={from} onChange={setFrom}>
            <div className="relative mt-2">
              <ListboxButton
                className="relative w-full font-bold cursor-default rounded-2xl py-2 px-3 bg-orange-900 text-white">
                <span className="text-xl block truncate">{from.title}</span>
              </ListboxButton>
              <ListboxOptions
                transition
                className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-3xl bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5"
              >
                {locations.map((location) => (
                  <ListboxOption
                    key={location.id}
                    value={location}
                    className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-orange-900 data-[focus]:text-white"
                  >
                    <div className="flex items-center">
                  <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {location.title}
                </span>
                    </div>
                    <span
                      className="absolute inset-y-0 right-0 flex items-center pr-4 text-orange-900 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5"/>
              </span>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>
        <div className="flex flex-col space-y-2 basis-1/2">
          <div>
            到：
          </div>
          <Listbox value={to} onChange={setTo}>
            <div className="relative mt-2">
              <ListboxButton
                className="relative w-full font-bold cursor-default rounded-2xl py-2 px-3 bg-orange-900 text-white">
                <span className="text-xl block truncate">{to.title}</span>
              </ListboxButton>
              <ListboxOptions
                transition
                className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-3xl bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5"
              >
                {locations.map((location) => (
                  <ListboxOption
                    key={location.id}
                    value={location}
                    className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-orange-900 data-[focus]:text-white"
                  >
                    <div className="flex items-center">
                  <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {location.title}
                </span>
                    </div>
                    <span
                      className="absolute inset-y-0 right-0 flex items-center pr-4 text-orange-900 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5"/>
              </span>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <div>
              预计时长
            </div>
            <ClockIcon className="w-6"/>
          </div>
          <div className="text-2xl">
            {`${57}分钟 共${3.4}公里`}
          </div>
        </div>
        <a href="/walk"
           className={"text-white text-lg font-bold px-3 py-2.5 bg-green-500 rounded-2xl shadow-lg shadow-green-400/70 " + (to == from ? "grayscale" : "")}>
          开始步行
        </a>
      </div>
    </div>
  )
}

function Collection() {
  return (
    <Disclosure as="div" className="w-full max-w-md">
      <div className="bg-white text-orange-900 flex-col space-y-2 rounded-3xl p-4 shadow-xl shadow-orange-900/40">
        <DisclosureButton as="div" className="group flex justify-between">
          <div className="flex items-center space-x-2">
            <TrophyIcon className="w-6 h-6"/>
            <div className="text-lg">
              成就系统
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <div>
              查看更多
            </div>
            <ChevronUpIcon className="w-4 h-4 group-data-[open]:rotate-180 transition-all duration-300"/>
          </div>
        </DisclosureButton>
        <DisclosurePanel
          className="flex flex-col space-y-1 origin-top data-[closed]:-translate-y-6 data-[closed]:opacity-0">
          {trophies.map((trophy) => (
            <div className="flex justify-between" key={trophy.id}>
              <div className="font-bold">
                {trophy.title}
              </div>
              <div className="opacity-60">
                {trophy.date}
              </div>
            </div>
          ))}
        </DisclosurePanel>
      </div>
    </Disclosure>
  )
}

function TodayDistance() {
  return (
    <>
      <div className="bg-white text-orange-900 flex-col space-y-4 rounded-3xl p-4 shadow-xl shadow-orange-900/40">
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <MapPinIcon className="w-6 h-6"/>
            <div className="text-lg">
              今天的成绩
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <div>
              查看更多
            </div>
            <ArrowTopRightOnSquareIcon className="w-4 h-4"/>
          </div>
        </div>
        <div>
          一共走了：{2.4}KM
        </div>
      </div>
    </>
  )
}