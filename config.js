/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "이우용",
    subname: "우용",
    nameEn: "Groom",
    father: "박찬규",
    mother: "이인숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "연수진",
    subname: "수진",
    nameEn: "Bride",
    father: "연제욱",
    mother: "",
    fatherDeceased: false,
    motherDeceased: false
},

  wedding: {
    date: "2026-12-12",
    time: "14:00",
    venue: "메종드보네르",
    hall: "보네르홀 1층",
    address: "대전 서구 한밭대로 797 캠코캐피탈타워 1층",
    tel: "042-603-1234",
    mapLinks: {
      kakao: "https://place.map.kakao.com/1578266948",
      naver: "https://naver.me/FjbnXFGv"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "설렘보다 믿음이 커진 지금,\n저희 결혼합니다.\n\n소중한 분들과 함께\n이 날의 기쁨을 나누고 싶습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "평범한 하루들이 쌓여\n오늘이라는 특별한 날이 되었습니다.\n\n지금의 마음 그대로\n앞으로의 날들을 살아가려 합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "이우용", bank: "농협은행", number: "356-0796-8196-83" },
      { role: "아버지", name: "박찬규", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "이인숙", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "연수진", bank: "카카오뱅크", number: "3333-26-9812247" },
      { role: "아버지", name: "연제욱", bank: "기업은행", number: "000-000-000000" },
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "이우용 ♥ 연수진 결혼합니다",
    description: "2026 12월 12일, 소중한 분들을 초대합니다."
  }
};
