import React from 'react'
import {
  IoSearch,
  IoCreate,
  IoCheckbox,
  IoDesktopOutline,
} from 'react-icons/io5'

export default function ProjectPage() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      {/* 이미지 섹션 */}
      <div className="flex justify-center mb-8">
        <img
          src="/images/moviepage.png"
          alt="영화 기록장"
          className="w-full max-w-2xl rounded-lg shadow-lg"
        />
      </div>

      {/* 주요 기능들 헤더 */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        주요 기능들
      </h1>

      {/* 기능 박스 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[
          {
            icon: <IoSearch className="text-4xl text-blue-500" />,
            title: '영화 검색',
            description: '영화를 장르별로 모아보고 검색할 수 있습니다',
          },
          {
            icon: <IoCheckbox className="text-4xl text-green-500" />,
            title: '영화 정보 확인',
            description: '영화의 상세정보를 확인할 수 있습니다',
          },
          {
            icon: <IoCreate className="text-4xl text-yellow-500" />,
            title: '영화 기록장',
            description: '영화를 보고 감상문을 작성할 수 있습니다',
          },
          {
            icon: <IoDesktopOutline className="text-4xl text-red-500" />,
            title: '영화 커뮤니티',
            description: '리뷰를 달며 영화에 대해 소통 가능합니다',
          },
        ].map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">{icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {title}
            </h2>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
