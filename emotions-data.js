// 감정 데이터 - 총 64개의 다양한 감정
const emotionsData = [
    // 기쁨 관련
    { name: '기쁘다', emoji: '😊', desc: '바라는 일이 이루어져 기분이 좋고 즐겁다', color: '#FFEB3B', category: '기쁨' },
    { name: '행복하다', emoji: '🥰', desc: '충분히 기쁘고 만족을 느끼다', color: '#FFE082', category: '기쁨' },
    { name: '감격스럽다', emoji: '🥹', desc: '뿌듯하거나 기뻐서 가슴이 뭉클해지다', color: '#FFCA28', category: '기쁨' },
    { name: '설레다', emoji: '💗', desc: '마음이 들떠서 두근거리다', color: '#FFB6C1', category: '기쁨' },
    { name: '신나다', emoji: '🤗', desc: '재미있고 즐거워서 기분이 좋다', color: '#FFF176', category: '기쁨' },
    { name: '뿌듯하다', emoji: '😌', desc: '기쁘고 흐뭇한 느낌으로 가득하다', color: '#FFE57F', category: '기쁨' },
    { name: '벅차다', emoji: '🥺', desc: '기쁨이나 희망이 넘칠 듯이 가득하다', color: '#FFD740', category: '기쁨' },
    { name: '즐겁다', emoji: '😄', desc: '즐겁고 유쾌하다. 마음에 거슬림이 없이 흐뭇하고 기분이 좋다', color: '#FFEE58', category: '기쁨' },
    { name: '유쾌하다', emoji: '😆', desc: '즐겁고 상쾌하다', color: '#FFF59D', category: '기쁨' },
    { name: '상쾌하다', emoji: '🌟', desc: '기분이 시원하고 산뜻하다', color: '#FFEB3B', category: '기쁨' },
    { name: '산뜻하다', emoji: '✨', desc: '기분이나 느낌이 깨끗하고 시원스럽다', color: '#FFF9C4', category: '기쁨' },
    { name: '흐뭇하다', emoji: '☺️', desc: '마음에 들어 매우 만족스럽다', color: '#FFE082', category: '기쁨' },
    { name: '통쾌하다', emoji: '🎉', desc: '아주 즐겁고 시원하여 유쾌하다', color: '#FFCA28', category: '기쁨' },
    { name: '자랑스럽다', emoji: '😤', desc: '남에게 드러내어 뽐낼 만한 데가 있다', color: '#FFD54F', category: '기쁨' },
    
    // 슬픔 관련
    { name: '슬프다', emoji: '😢', desc: '서러운 일을 겪거나 불쌍한 일을 보고 울고 싶을 만큼 마음이 아프고 괴롭다', color: '#90CAF9', category: '슬픔' },
    { name: '외롭다', emoji: '😞', desc: '혼자 있거나 기댈 곳이 없어 허전하고 쓸쓸하다', color: '#81C784', category: '슬픔' },
    { name: '서럽다', emoji: '😭', desc: '답답하고 슬프다', color: '#64B5F6', category: '슬픔' },
    { name: '그립다', emoji: '🥺', desc: '보고 싶거나 만나고 싶다. 없어서 필요하고 아쉽다', color: '#7986CB', category: '슬픔' },
    { name: '쓸쓸하다', emoji: '😔', desc: '마음이 외롭고 슬프다', color: '#5C6BC0', category: '슬픔' },
    { name: '우울하다', emoji: '😟', desc: '걱정되거나 답답하여 활기가 없다', color: '#3F51B5', category: '슬픔' },
    { name: '울적하다', emoji: '☁️', desc: '마음이 쓸쓸하고 답답하다', color: '#3949AB', category: '슬픔' },
    { name: '허무하다', emoji: '💭', desc: '아무 의미나 보람이 없이 허전하고 쓸쓸하다', color: '#303F9F', category: '슬픔' },
    { name: '허전하다', emoji: '🕳️', desc: '무엇을 잃거나 의지할 곳이 없어진 것같이 서운한 느낌이 있다', color: '#283593', category: '슬픔' },
    { name: '아프다', emoji: '💔', desc: '마음이 편하지 않고 괴롭다', color: '#1A237E', category: '슬픔' },
    { name: '속상하다', emoji: '😣', desc: '걱정스럽거나 화나는 일로 마음이 편하지 않고 괴롭다', color: '#4527A0', category: '슬픔' },
    
    // 화남 관련
    { name: '화나다', emoji: '😡', desc: '마음에 들지 않거나 기분이 나빠서 불쾌하고 답답한 마음이 생기다', color: '#EF5350', category: '화남' },
    { name: '짜증스럽다', emoji: '😤', desc: '보기에 못마땅한 데가 있다', color: '#E53935', category: '화남' },
    { name: '억울하다', emoji: '😠', desc: '아무 잘못 없이 혼나거나 벌을 받아서 속이 상하고 분하다', color: '#D32F2F', category: '화남' },
    { name: '밉다', emoji: '😒', desc: '마음에 들지 않거나 눈에 거슬리는 느낌이 있다', color: '#C62828', category: '화남' },
    { name: '원망스럽다', emoji: '😑', desc: '못마땅하게 여겨 탓하거나 불만을 가지고 미워하다', color: '#B71C1C', category: '화남' },
    { name: '불쾌하다', emoji: '😣', desc: '못마땅하여 기분이 좋지 않다', color: '#FF5722', category: '화남' },
    { name: '답답하다', emoji: '😩', desc: '일이 잘되지 않아서 애가 타다. 비좁거나 꽉 막힌 느낌이 있어 마음에 여유가 없다', color: '#FF6347', category: '화남' },
    
    // 불안/두려움 관련
    { name: '불안하다', emoji: '😰', desc: '걱정이 되어 마음이 편하지 않다', color: '#CE93D8', category: '불안' },
    { name: '걱정스럽다', emoji: '😟', desc: '걱정이 되어 편하지 않다', color: '#BA68C8', category: '불안' },
    { name: '무섭다', emoji: '😨', desc: '걱정하는 일이 벌어질까 불안하다. 위험이나 위협으로 느껴져 마음이 불안하다', color: '#AB47BC', category: '불안' },
    { name: '두렵다', emoji: '😱', desc: '어떤 대상을 무서워하며 걱정이 되어 불안하다', color: '#9C27B0', category: '불안' },
    { name: '초조하다', emoji: '😬', desc: '애가 타서 마음이 조마조마하다', color: '#8E24AA', category: '불안' },
    { name: '조마조마하다', emoji: '😟', desc: '앞으로 닥칠 일이 걱정되어 마음을 놓을 수 없고 불안하다', color: '#7B1FA2', category: '불안' },
    
    // 놀람 관련
    { name: '놀라다', emoji: '😲', desc: '뜻밖의 일이나 무서움에 가슴이 두근거리다. 신기한 것을 보고 매우 감동하다', color: '#FF9800', category: '놀람' },
    { name: '당황스럽다', emoji: '😳', desc: '놀라거나 다급하여 어떻게 해야 할지 모르다', color: '#FB8C00', category: '놀람' },
    { name: '어이없다', emoji: '😮', desc: '너무 엄청나거나 뜻밖의 일을 당해서 기가 막히다', color: '#F57C00', category: '놀람' },
    { name: '얼떨떨하다', emoji: '😵', desc: '뜻밖의 일로 당황하여 정신이 없고 멍하다', color: '#EF6C00', category: '놀람' },
    { name: '신기하다', emoji: '🤯', desc: '믿을 수 없을 정도로 놀랍고 이상하다', color: '#E65100', category: '놀람' },
    
    // 부끄러움 관련
    { name: '부끄럽다', emoji: '😳', desc: '잘못을 저질러서 창피하다. 용기가 없어 수줍다', color: '#FFCDD2', category: '부끄러움' },
    { name: '창피하다', emoji: '🫣', desc: '떳떳하지 못한 일로 몹시 부끄럽다', color: '#EF9A9A', category: '부끄러움' },
    { name: '미안하다', emoji: '😅', desc: '다른 사람에 대해 마음이 편하지 않고 부끄럽다', color: '#E57373', category: '부끄러움' },
    
    // 감사 관련
    { name: '고맙다', emoji: '🙏', desc: '남이 친절하게 대해 주거나 도움을 주어서 흐뭇하고 즐겁다', color: '#A5D6A7', category: '감사' },
    { name: '다행스럽다', emoji: '😌', desc: '생각보다 일이 잘되어 운이 좋은 듯하다. 마음이 놓이고 흡족하다', color: '#81C784', category: '감사' },
    
    // 기타 감정
    { name: '괴롭다', emoji: '😖', desc: '아프고 힘들다. 몸이나 마음이 편하지 않고 고통스럽다', color: '#BCAAA4', category: '기타' },
    { name: '궁금하다', emoji: '🤔', desc: '모르는 것을 알고 싶어 몹시 답답하다', color: '#FFB74D', category: '기타' },
    { name: '나쁘다', emoji: '😕', desc: '마음이나 기분이 좋지 않다', color: '#A1887F', category: '기타' },
    { name: '괜찮다', emoji: '😐', desc: '걱정이 되거나 문제가 될 것이 없다. 나쁘지 않고 보통 이상으로 좋다', color: '#E0E0E0', category: '기타' },
    { name: '따분하다', emoji: '😑', desc: '재미가 없어 지루하고 심심하다', color: '#BDBDBD', category: '기타' },
    { name: '무겁다', emoji: '😞', desc: '마음이 유쾌하지 않고 활발한 기운이 없다', color: '#9E9E9E', category: '기타' },
    { name: '부담스럽다', emoji: '😓', desc: '어떤 일이 짐처럼 느껴지고 불편하다', color: '#757575', category: '기타' },
    { name: '불쌍하다', emoji: '😢', desc: '남의 처지가 딱해서 가슴 아프다', color: '#616161', category: '기타' },
    { name: '불편하다', emoji: '😐', desc: '마음이 편하지 않고 괴롭다', color: '#424242', category: '기타' },
    { name: '불행하다', emoji: '😔', desc: '좋지 않은 일로 인해 괴롭거나 슬프다. 행복하지 못하다', color: '#212121', category: '기타' },
    { name: '안쓰럽다', emoji: '😥', desc: '가엾고 불쌍하다', color: '#78909C', category: '기타' },
    { name: '안타깝다', emoji: '😟', desc: '마음대로 되지 않거나 보기에 딱하여 가슴 아프고 답답하다', color: '#607D8B', category: '기타' },
    { name: '좋다', emoji: '😊', desc: '기쁘고 만족스럽다', color: '#8BC34A', category: '기타' },
    { name: '찝찝하다', emoji: '😕', desc: '만족스럽지 못하거나 걱정스러운 일로 마음에 걸리는 데가 있다', color: '#546E7A', category: '기타' },
    { name: '편안하다', emoji: '😌', desc: '몸과 마음이 힘들지 않고 좋다. 걱정이 없어 좋다', color: '#B0BEC5', category: '기타' },
    { name: '후련하다', emoji: '😤', desc: '답답한 것이 풀려서 마음이 시원하다', color: '#CFD8DC', category: '기타' }
];

// emotions-data.js를 index.html에서 사용할 수 있도록 export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = emotionsData;
}