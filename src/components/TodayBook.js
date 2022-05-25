import FineDustSrc from "../assets/finedust.png";
import ScissorsSrc from "../assets/scissors.png";
import CaptainHoneySrc from "../assets/captainhoney.png";
import CocktailSrc from "../assets/cocktail.png";
import FridaySrc from "../assets/friday.png";
import PunchSrc from "../assets/punch.png";

import React from "react";
import styled from "styled-components";
import BookAbout from "./BookAbout";
import BookPoster from "./BookPoster";

const Base = styled.main`
  width: 60%;
  margin: 0 auto;
  height: 450px;
  background-color: #ffffff;
`;

const Section = styled.section`
  width: 100%;
  height: 450px;
  display: flex;
`;

const SelectBookContainer = styled.div`
  width: 30%;
  height: 450px;
  background-color: brown;
  display: flex;
  align-items: center;
`;

const SelectBook = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 350px;
  background-color: green;
`;

const BookDetailContainer = styled.div`
  background-color: pink;
  width: 70%;
  height: 450px;
`;

const BookDetail = styled.div`
  width: 100%;
  height: 250px;
`;

const TodayBookTitle = styled.h1`
  /* font-size: 30px; */
  margin: 0 auto;
`;

const TodayBookMainDetail = styled.div``;

const TodayBookContents = styled.div``;

const BookPosterContainer = styled.div`
  background-color: yellow;
  width: 100%;
  height: 200px;
`;

const BookPosters = styled.ul`
  margin: 0;
  padding: 0;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;

const BookPosterWrapper = styled.li``;

const FineDust = styled.img`
  width: 80%;
`;

const Scissors = styled.img`
  width: 80%;
`;

const CaptainHoney = styled.img`
  width: 80%;
`;

const Cocktail = styled.img`
  width: 80%;
`;

const Friday = styled.img`
  width: 80%;
`;

const Punch = styled.img`
  width: 80%;
`;

function TodayBook() {
  const todayBookData = [
    {
      id: 0,
      title: "미세먼지",
      author: "류연웅, 김청귤, 박대겸, 김효인, 조예은",
      publisher: "안전가옥",
      price: "13000원",
      about:
        "올해 봄에는 유난히 미세먼지로 괴로운 날이 많았습니다. 대멸종 앤솔로지를 이을 주제를 고민하며, 일상에서 마주치기에 피하지도 못하는 재앙을 그린 이야기를 모아보자는 생각으로 '미세먼지'라는 주제를 떠올렸습니다. 공모전을 통해서  미세먼지를 통해 재미와 의미를 동시에 전달하려는 작품을 선정하고자 하였고, 이제 수상작 네 편과 초대작 한 편을 묶어 《미세먼지》 앤솔로지로 출간합니다. 작품 속 인물들의 시야를 가리고 호흡을 틀어막는 것은 비단 미세먼지뿐만은 아닙니다. 타인에 대한 편견, 불확실한 미래, 자유를 제약하는 여러 조건들이 이들을 짓누르고, 흐릿한 세계 속에서 꿈은 묻히고 진실은 가려지며 사랑은 빛을 잃습니다. 그럼에도 그들이 앞으로 나아가는 까닭은, 눈에 보이는 것만이 전부가 아니라고 믿기 때문이겠지요. 《미세먼지》의 여러 인물들은 봄이 지나도 미세먼지가 가시지 않는 세상에서 살고 있습니다. 눈앞이 흐릿하기에 더 적극적으로 손을 뻗어 길을 찾으려 하는 그들의 움직임은 막막한 현실을 헤치며 나아가는 우리의 모습을 닮았습니다. 잿빛 세상에도 엄연히 존재하는 희망을 《미세먼지》 앤솔로지에서 찾아보세요. ",
    },
    {
      id: 1,
      title: "아홉수 가위",
      author: "범유진",
      publisher: "안전가옥",
      price: "9000원",
      about:
        "안전가옥 쇼-트 시리즈의 열 번째 책 《아홉수 가위》는 안전가옥 스토리 공모전 3관왕이라는 기록을 보유한 범유진 작가의 단편집이다. 경계에 선 인물의 슬픔과 아름다움을 꾸준히 그려 온 작가와 함께 인생에서 가장 캄캄한 경계를 지나는 10대~20대의 에너지가 폭발하는 이야기를 만들어 보고자 했다. 그들의 세상이 어두운 것은 아직 세상의 부조리에 대항할 힘을 갖추지 못한 탓이다. 오랜 시간 고통받은 끝에 더는 어두워질 수 없게 된 순간, 청년들은 숨겨져 있던 자신의 능력을 깨닫고 빛나기 시작한다.마냥 참고 살던 K장녀의 인생을 바꿔 놓은 빌런을 그린 블랙코미디 〈1호선에서 빌런을 만났습니다〉, 날개를 지녔지만 날 수 없는 쌍둥이 자매가 재생을 위한 파괴를 향해 나아가는 영어덜트 판타지 〈아주 작은 날갯짓을 너에게 줄게〉, 죽기로 결심한 스물아홉 청년과 말 많고 식탐 많은 귀신이 펼치는 따스한 드라마 〈아홉수 가위〉, 어둠 속에서 형을 잃었던 소년이 어둠을 끌어안는 과정을 담은 스릴러 〈어둑시니 이끄는 밤〉 등 네 작품을 수록했다.",
    },
    {
      id: 2,
      title: "잘 먹고 잘 싸운다, 캡틴 허니 번",
      author: "김여울",
      publisher: "안전가옥",
      price: "15000원",
      about:
        "안전가옥 쇼-트 시리즈의 여섯 번째 책이자 김여울 작가의 경장편이다. 슈퍼히어로 장르와 여성 서사를 결합해 여성 초능력자들의 연대와 공감과 성장을 경쾌하게 그려냈다. 웹툰 창작을 전공한 작가가 본디 웹툰 작업을 위해 기획했던 이야기로, 장르소설·웹툰·웹소설 사이를 가볍게 유영하는 문장이 작품 전체에 발랄한 리듬을 더한다.몸무게에 비례하는 전투력을 지닌 히어로에게도 여성이라는 이유로 다이어트를 강요하는 사람들, 개인의 능력은 아예 확인하지도 않은 채 여성 히어로를 임무 수행에서 배제하는 히어로 협회. 일일이 맞서는 대신 여성이자 히어로이길 포기하면 편하겠지만, 히어로 랭킹 1위 ‘캡틴 허니 번’에겐 그럴 마음이 전혀 없다. 잘 먹고, 잘 싸우고, 능력만큼 당당하니 장애물쯤이야 돌파하면 그만이다. 현실의 여성들과 같은 고통을 겪고도 시원스레 더 높은 곳을 향하기에, 노랑색 코스튬을 휘날리며 달리는 그녀에게서 눈을 떼기란 쉽지 않다.",
    },
    {
      id: 3,
      title: "칵테일, 러브, 좀비",
      author: "조예은",
      publisher: "안전가옥",
      price: "9000 원",
      about:
        "안전가옥 쇼-트 시리즈의 두 번째 책으로, 조예은 작가의 단편집이다. 안전가옥 오리지널 시리즈의 첫 책《뉴서울파크 젤리장수 대학살》에서 탄탄한 구성의 호러 스릴러를 선보였던 작가의 연출력은 단편집에서 더욱 다양한 색채로 빛을 발한다.미묘하지만 분명한 폭력을 감내해 왔던 여성 빌런의 탄생을 그린 <초대>, 물귀신과 숲귀신 사이의 사랑스러운 이끌림을 담은 <습지의 사랑>, 블랙 유머를 통해 가부장제의 이면을 들여다보는 오컬트 좀비물 <칵테일, 러브, 좀비>, 제2회 황금가지 타임리프 공모전에서 우수상을 차지한 <오버랩 나이프, 나이프> 등 네 작품을 수록하였다.",
    },
    {
      id: 4,
      title: "땡스 갓, 잇츠 프라이데이",
      author: "심너울",
      publisher: "안전가옥",
      price: "9000원",
      about:
        "작년 안전가옥의 빛나는 순간을 꼽아본다면, 이 사건은 분명히 다섯 손가락 안에 들겁니다. 바로 2019 부산국제영화제 북투필름에서 심너울 작가의 <세상을 끝내는 데 필요한 점프의 횟수>로 토리코믹스 어워드를 수상했던 순간이지요. 안전가옥의 첫 번째 수상이자, 심너울 작가의 첫 번째 수상이었습니다. 같은 작품으로 2019 SF어워드 중단편소설 부문 대상도 수상하셨죠! 심너울 작가는 2018년 6월에 첫 번째 작품을 공개하고 1년 반 동안 무려 21편의 작품을 발표하며 활발하게 활동했습니다. 이 중에는 트위터에서 뜨거운 사랑을 받았던 <정적>, <경의중앙선에서 마주치다>와 같은 작품들이 있었습니다. 심너울 작가의 작품에는 소박한 꿈을 가진 소박한 청년들이 종종 등장합니다. 그저 금요일이 되었으니, 한 주 동안의 수고를 되돌아보며 맥주 한 캔을 들이키고, 늦잠을 자도 된다는 사실에 안도하는 사람들이죠. 그들이 빠져드는 부조리들을 심너울 작가는 SF와 판타지의 장르 문법으로, 기발한 상상력으로 그려냅니다. 그래서 실제의 삶에서 하루 하루를 버티고 있는 청년 독자들에게 더 많은 사랑과 지지를 받았는지도 모르겠습니다. 안전가옥은 올해 또 하나의 '첫 번째'를 심너울 작가와 함께 하고 있습니다. 안전가옥이 선보일 단편집 라인업 '쇼-트'시리즈의 첫 번째 책, 심너울 작가의 《땡스 갓, 잇츠 프라이데이》를 소개합니다. ",
    },
    {
      id: 5,
      title: "사뭇 강펀치",
      author: "설재인",
      publisher: "안전가옥",
      price: "9000원",
      about:
        "안전가옥 쇼-트 시리즈의 일곱 번째 책이자 설재인 작가의 단편집이다. 외고에서 수학 교사로 근무하다 사표를 낸 후 복싱 선수로 활약한 작가는 생명력이 펄떡이는 문장들을 통해 자신만의 링에 오른 여자들의 곁으로 독자를 데려간다. 그들은 관습도 관계도 관심도 자기를 망친다면 받아들이지 않겠다고 선언했다. 맞서 싸우는 것 외에 다른 길은 없다.학생 스포츠계의 어두운 단면을 온몸으로 체험한 끝에 정면 돌파를 택한 열여섯 살 복싱 선수를 그린 〈사뭇 강펀치〉, 음모론자 단체 리더의 딸이 아버지가 빼앗은 삶의 주도권을 쟁취하는 과정을 본인의 목소리로 들려주는 〈그녀가 말하기를〉, 실종된 쌍둥이 여동생을 찾는 여정을 통해 가족이기에 주고받는 상처를 파헤치는 스릴러 〈앙금〉 등 세 작품을 담았다.",
    },
  ];

  const todayBookPoster = [
    {
      id: 0,
      poster: [FineDustSrc],
    },
    {
      id: 1,
      poster: [ScissorsSrc],
    },
    {
      id: 2,
      poster: [CaptainHoneySrc],
    },
    {
      id: 3,
      poster: [CocktailSrc],
    },
    {
      id: 4,
      poster: [FridaySrc],
    },
    {
      id: 5,
      poster: [PunchSrc],
    },
  ];

  return (
    <Base>
      <Section>
        <SelectBookContainer>
          <SelectBook>
            <BookPoster
              bookposter={todayBookPoster[0]}
              key={todayBookPoster.id}
            />
          </SelectBook>
        </SelectBookContainer>
        <BookDetailContainer>
          <BookDetail>
            <TodayBookTitle>오늘의 책</TodayBookTitle>
            <TodayBookMainDetail>
              <BookAbout bookabout={todayBookData[0]} key={todayBookData.id} />
            </TodayBookMainDetail>
            <TodayBookContents></TodayBookContents>
          </BookDetail>
          <BookPosterContainer>
            <BookPosters>
              <BookPosterWrapper>
                <a href="/">
                  <FineDust src={FineDustSrc} />
                </a>
              </BookPosterWrapper>
              <BookPosterWrapper>
                <Scissors src={ScissorsSrc} />
              </BookPosterWrapper>
              <BookPosterWrapper>
                <CaptainHoney src={CaptainHoneySrc} />
              </BookPosterWrapper>
              <BookPosterWrapper>
                <Cocktail src={CocktailSrc} />
              </BookPosterWrapper>
              <BookPosterWrapper>
                <Friday src={FridaySrc} />
              </BookPosterWrapper>
              <BookPosterWrapper>
                <Punch src={PunchSrc} />
              </BookPosterWrapper>
            </BookPosters>
          </BookPosterContainer>
        </BookDetailContainer>
      </Section>
    </Base>
  );
}

export default TodayBook;
