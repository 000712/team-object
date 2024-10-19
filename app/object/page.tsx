import React from 'react'

export default function ObjectPage() {
  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center bg-gray-100">
      {/* 사진 섹션 */}
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg mx-auto mb-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <img
            src="https://yt3.googleusercontent.com/SXKyE4XgHJtX4qLS-9FKDuZt9EpBfeFPlGmNQdqsfxW2FDaKOjE53Mb20E43QuQfNDritLK1aw=s900-c-k-c0x00ffffff-no-rj"
            alt="영화 이미지 1"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="https://play-lh.googleusercontent.com/vAkKvTtE8kdb0MWWxOVaqYVf0_suB-WMnfCR1MslBsGjhI49dAfF1IxcnhtpL3PnjVY"
            alt="영화 이미지 2"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="https://www.tving.com/img/tving-favicon-160@3x.png"
            alt="영화 이미지 3"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/5CxR/image/9XcqgiDZg0gly7Infnam_qvHF-g"
            alt="영화 이미지 4"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="https://etcc.co.kr/wp-content/uploads/2023/07/20230726120108.png"
            alt="영화 이미지 5"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* 소개 섹션 */}
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">개발 목적</h2>
        <p className="text-lg text-gray-700 mb-4">
          이 영화 소개 사이트는 OTT서비스의 활성화로 인해 언제 어디서든 다양한
          영화를 접하기 쉬워짐에 따라, 한 곳에서 쉽게 찾고, 장르별로 모아보며
          상세한 정보를 제공하는 것을 돕고자 합니다. 영화 팬들이 더욱 쉽게
          원하는 영화를 발견하고, 영화에 대한 자세한 설명, 감독 및 배우 정보를
          확인할 수 있는 플랫폼을 제공하며, 영화 기록장 등 다양한 기능으로
          영화를 더욱 깊이 있게 즐길 수 있도록 돕습니다.
        </p>
      </div>
    </div>
  )
}
