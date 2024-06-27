import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  HashRouter,
} from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import TermsOfUse from "./wrappers/myPage/TermsOfUse";
// import {} from "react";
import { history } from "./history";

const HomeFurnitureTwo = lazy(() => import("./pages/home/HomeFurnitureTwo"));

// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));
const ShopGridFilter = lazy(() => import("./pages/shop/ShopGridFilter"));
const ShopGridTwoColumn = lazy(() => import("./pages/shop/ShopGridTwoColumn"));
const ShopGridMenColumn = lazy(() => import("./pages/shop/ShopGridMenColumn"));
const ShopGridWomenColumn = lazy(() =>
  import("./pages/shop/ShopGridWomenColumn")
);
const ShopGridKidsColumn = lazy(() =>
  import("./pages/shop/ShopGridKidsColumn")
);
const ShopGridNoSidebar = lazy(() => import("./pages/shop/ShopGridNoSidebar"));
const ShopGridFullWidth = lazy(() => import("./pages/shop/ShopGridFullWidth"));
const ShopGridRightSidebar = lazy(() =>
  import("./pages/shop/ShopGridRightSidebar")
);
const ShopListStandard = lazy(() => import("./pages/shop/ShopListStandard"));
const ShopListFullWidth = lazy(() => import("./pages/shop/ShopListFullWidth"));
const ShopListTwoColumn = lazy(() => import("./pages/shop/ShopListTwoColumn"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));
const ProductTabLeft = lazy(() =>
  import("./pages/shop-product/ProductTabLeft")
);
const ProductTabRight = lazy(() =>
  import("./pages/shop-product/ProductTabRight")
);
const ProductSticky = lazy(() => import("./pages/shop-product/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/shop-product/ProductSlider"));
const ProductFixedImage = lazy(() =>
  import("./pages/shop-product/ProductFixedImage")
);

// blog pages
const BlogStandard = lazy(() => import("./pages/blog/BlogStandard"));
const BlogNoSidebar = lazy(() => import("./pages/blog/BlogNoSidebar"));
const BlogRightSidebar = lazy(() => import("./pages/blog/BlogRightSidebar"));
const BlogDetailsStandard = lazy(() =>
  import("./pages/blog/BlogDetailsStandard")
);

const otherpage = lazy(() => import("./components/astrology/OthePage"));
const BookEvent = lazy(() => import("./components/astrology/BookEvent"));
const Bookpoojadetail = lazy(() =>
  import("./components/astrology/Bookpoojadetail")
);
// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const faqPage = lazy(() => import("./wrappers/myPage/FaqPage"));
const FAQ = lazy(() => import("./wrappers/myPage/Faq"));

const privacyPolicy = lazy(() => import("./wrappers/myPage/privacyPolicy"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));
const Step = lazy(() => import("./pages/other/Step"));
const Phone = lazy(() => import("./pages/other/Phone"));
const Otp = lazy(() => import("./pages/other/Otp"));
const OtpVerify = lazy(() =>
  import("./components/astrology/astrologerpages/OtpVerify")
);
const Password = lazy(() => import("./pages/other/Password"));
const ResetPassword = lazy(() => import("./pages/other/ResetPassword"));
const ForgotPassword = lazy(() => import("./pages/other/ForgotPassword"));

const RegisterAstro = lazy(() =>
  import("./components/astrology/astrologerpages/RegisterAstro")
);
const CompleteProAstro = lazy(() =>
  import("./components/astrology/astrologerpages/CompleteProAstro")
);

const DemoVideoCall = lazy(() =>
  import("./components/astrology/DemoVideoCall")
);

const DemoCall = lazy(() => import("./components/astrology/DemoCall"));

// zegocloud //
const Room = lazy(() => import("./components/astrology/zegocloud/Room"));
const LiveVideo = lazy(() =>
  import("./components/astrology/zegocloud/LiveVideo")
);
const VideoCall = lazy(() =>
  import("./components/astrology/zegocloud/VideoCall")
);
const LiveStream = lazy(() =>
  import("./components/astrology/zegocloud/LiveStream")
);

const Call = lazy(() => import("./components/astrology/zegocloud/Call"));
// astology pages start

const AlertPage = lazy(() => import("./components/astrology/AlertPage"));

const CustomerSupport = lazy(() =>
  import("./components/astrology/CustomerSupport")
);
const AskQuestion = lazy(() => import("./components/astrology/AskQuestion"));
const AstroProfileVideo = lazy(() =>
  import("./components/astrology/AstroProfileVideo")
);

const AskQuestionList = lazy(() =>
  import("./components/astrology/AskQuestionList")
);
// const LiveAstrologer = lazy(() =>
//   import("./components/astrology/LiveAstrologer")
// );
const LiveAstrologer = lazy(() => import("./components/astrology/LiveConnect"));

// Live Main Curent use
const LiveAllUser = lazy(() => import("./components/astrology/LiveAstro"));
const LalKitab = lazy(() => import("./components/astrology/LalKitab"));
const LalkitabPlanets = lazy(() =>
  import("./components/astrology/LalkitabPlanets")
);
// const LalKitab = lazy(() => import("./components/astrology/LalKitab"));

const LalKitabPage = lazy(() => import("./components/astrology/LalKitabPage"));
const Numerology = lazy(() => import("./components/astrology/Numerology"));
const Tarot = lazy(() => import("./components/astrology/Tarot"));
const LuckyGemstone = lazy(() =>
  import("./components/astrology/LuckyGemstone")
);
const ShubhMuhurat = lazy(() => import("./components/astrology/ShubhMuhurat"));
const TodayFestival = lazy(() =>
  import("./components/astrology/TodayFestival")
);

const LoveAstrologer = lazy(() =>
  import("./components/astrology/LoveAstrologer")
);
const PanchangPage = lazy(() => import("./components/astrology/PanchangPage"));
const TodayPanchang = lazy(() =>
  import("./components/astrology/TodayPanchang")
);
const BasicPanchang = lazy(() =>
  import("./components/astrology/BasicPanchang")
);

// const BookEvent = lazy(() => import("./components/astrology/BookEvent"));
const AstroRating = lazy(() => import("./components/astrology/AstroRating"));
const OrderHistory = lazy(() => import("./components/astrology/OrderHistory"));
const UserChatHistoryList = lazy(() =>
  import("./components/astrology/UserChatHistoryList")
);
const UserCallHistrory = lazy(() =>
  import("./components/astrology/UserCallHistrory")
);
const UseVideoCallHistory = lazy(() =>
  import("./components/astrology/UseVideoCallHistory")
);
const UserChatHistory = lazy(() =>
  import("./components/astrology/UserChatHistory")
);

const UserRequestForm = lazy(() =>
  import("./components/astrology/UserRequestForm")
);
const UserRequestFormCall = lazy(() =>
  import("./components/astrology/UserRequestFormCall")
);
const CallList = lazy(() => import("./components/astrology/callList/CallList"));
const VideoList = lazy(() =>
  import("./components/astrology/callList/VideoList")
);
const ChatListData = lazy(() =>
  import("./components/astrology/chatList/ChatList")
);

const UserRequestFormVideoCall = lazy(() =>
  import("./components/astrology/UserRequestFormVideoCall")
);
const CustomerSupportForm = lazy(() =>
  import("./components/astrology/CustomerSupportForm")
);
const CustomerSupportView = lazy(() =>
  import("./components/astrology/CustomerSupportView")
);

const FreeKundli = lazy(() =>
  import("./components/astrology/kundalimatch/freekundli")
);
const KundaliReport = lazy(() =>
  import("./components/astrology/kundalimatch/kundalireport")
); 
const PitraDosh = lazy(() => import("./components/astrology/PitraDosh"));
const KalsharpDosh = lazy(() => import("./components/astrology/KalsharpDosh"));
const ManglikDosh = lazy(() => import("./components/astrology/ManglikDosh"));

const bannerSection = lazy(() =>
  import("./components/astrology/bannerSection")
);
const TeamMemberOne = lazy(() =>
  import("././wrappers/team-member/TeamMemberOne")
);
const HomeCategory = lazy(() => import("./components/astrology/homecategory"));
const OurWorkFlow = lazy(() => import("./components/astrology/ourworkflow.js"));
const PredictionallHome = lazy(() =>
  import("./components/astrology/predictionallhome")
);
const AboutUs = lazy(() => import("./components/astrology/aboutus"));
const AboutDetail = lazy(() => import("./components/astrology/aboutdetail"));
const AstrologerDetail = lazy(() =>
  import("./components/astrology/astrologerdetail")
);
const AstrologerSignup = lazy(() =>
  import("./components/astrology/astrologersignup")
);
const AstrologerLogin = lazy(() =>
  import("./components/astrology/astrologerlogin")
);
const AstroTeam = lazy(() => import("./components/astrology/astroteam"));
const SectionPooja = lazy(() => import("./components/astrology/sectionpooja"));
const ProfileDetail = lazy(() =>
  import("./components/astrology/profiledetail")
);
const PoojaDetail = lazy(() => import("./components/astrology/poojadetail"));
const HeroscopesAll = lazy(() =>
  import("./components/astrology/heroscopesall")
);

const HeroscopesTwo = lazy(() =>
  import("./components/astrology/heroscopestwo")
);
const HeroscopesTwo1 = lazy(() =>
  import("./components/astrology/heroscopestwo1")
);
const HeroscopesTwo2 = lazy(() =>
  import("./components/astrology/heroscopestwo2")
);
const HeroscopesTwo3 = lazy(() =>
  import("./components/astrology/heroscopestwo3")
);
const HeroscopesTwo4 = lazy(() =>
  import("./components/astrology/heroscopestwo4")
);
const HoroscopeDetail = lazy(() =>
  import("./components/astrology/HoroscopeDetail")
);
const HoroscopeDetail1 = lazy(() =>
  import("./components/astrology/HoroscopeDetail1")
);
const HoroscopeDetail2 = lazy(() =>
  import("./components/astrology/HoroscopeDetail2")
);
const HoroscopeDetail3 = lazy(() =>
  import("./components/astrology/HoroscopeDetail3")
);
const ZodicPage = lazy(() => import("./components/astrology/ZodicPage"));
const AstromallList = lazy(() =>
  import("./components/astrology/astromallList")
);
const PoojaProductList = lazy(() =>
  import("./components/astrology/PoojaProductList")
);
const ProductList = lazy(() => import("./components/astrology/ProductList"));
const ConsultantList = lazy(() =>
  import("./components/astrology/ConsultantList")
);
const CartList = lazy(() => import("./pages/other/CartList"));

const OurService = lazy(() => import("./components/astrology/OurService"));
const ServiceList = lazy(() => import("./components/astrology/ServiceList"));

const AllAstrologerList = lazy(() =>
  import("./components/astrology/allastrologerlist")
);
const WaitingPageCall = lazy(() =>
  import("./components/WaitingPage/Waitingpage")
);
const WaitingPagechat = lazy(() =>
  import("./components/WaitingPage/WaitingPageChat")
);
const WaitingPagevideo = lazy(() =>
  import("./components/WaitingPage/WaitingPageVideo")
);
const AllAstrochatList = lazy(() =>
  import("./components/astrology/allastrochatlist")
);

const AutoSearch = lazy(() => import("./components/astrology/autosearch"));
const MatchSearch = lazy(() => import("./components/astrology/MatchSearch"));

const SliderDemo = lazy(() => import("./components/astrology/sliderdemo"));
const SliderList = lazy(() => import("./components/astrology/sliderlist"));
const AllMinRecharge = lazy(() =>
  import("./components/astrology/AllMinRecharge")
);
const ChatRecharge = lazy(() =>
  import("./components/astrology/selectRecharge/ChatRecharge")
);
const CallRecharge = lazy(() =>
  import("./components/astrology/selectRecharge/CallRecharge")
);
const VideoRecharge = lazy(() =>
  import("./components/astrology/selectRecharge/VideoRecharge")
);

const AllMinRechargeCall = lazy(() =>
  import("./components/astrology/AllMinRechargeCall")
);
const AllMinRechargeVideoCall = lazy(() =>
  import("./components/astrology/AllMinRechargeVideo")
);
const ChatList = lazy(() => import("./components/chat/chatlist"));

const ChatApp = lazy(() => import("./components/chat/ChatApp"));

const DemoChat = lazy(() => import("./components/astrology/DemoChat"));

const KundaliForm = lazy(() =>
  import("./components/astrology/kundalimatch/kundaliform")
);
const KundaliMatchList = lazy(() =>
  import("./components/astrology/kundalimatch/kundalimatchlist")
);
const VarshPhala = lazy(() =>
  import("./components/astrology/kundalimatch/varshphala.js")
);
const VarshphalReport = lazy(() => 
 import("./components/astrology/kundalimatch/varshphalreport.js")) 
const WalletMoney = lazy(() => import("./components/astrology/WalletMoney"));
const WalletTransacList = lazy(() =>
  import("./components/astrology/WalletTransacList")
);
const ConversationList = lazy(() =>
  import("./components/astrology/ConsultantList")
);
const PaymentDetail = lazy(() =>
  import("./components/astrology/PaymentDetail")
);
const NotificationList = lazy(() =>
  import("./components/astrology/NotificationList")
);
const WalletAddForm = lazy(() =>
  import("./components/astrology/WalletAddForm")
);
const AddEvent = lazy(() => import("./components/astrology/AddEvent"));
const AddressForm = lazy(() => import("./components/astrology/AddressForm"));
const AddressFormEdit = lazy(() =>
  import("./components/astrology/AddressFormEdit")
);
const Home = lazy(() => import("./components/astrology/zegocloud/Home"));
const Cart = lazy(() => import("./pages/other/Cart"));
const MyOrder = lazy(() => import("./pages/other/MyOrder"));
const MyRefund = lazy(() => import("./pages/other/MyRefund"));
const Mypoojabooked = lazy(() => import("./pages/other/MyPoojabooking.js"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

const App = props => {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json"),
          fn: require("./translations/french.json"),
          de: require("./translations/germany.json"),
        },
      })
    );
  });

  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router history={history}>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <HashRouter>
                <Switch>
                  <Route
                    exact
                    path={process.env.PUBLIC_URL + "/"}
                    component={HomeFurnitureTwo}
                  />

                  {/* astologo route  */}
                  <Route
                    path={process.env.PUBLIC_URL + "/homecategory"}
                    component={HomeCategory}
                  />
                  {/* astologo route  Close */}
                  {/* Shop pages */}
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-grid-standard"}
                    component={ShopGridStandard}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-grid-filter"}
                    component={ShopGridFilter}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-grid-two-column"}
                    component={ShopGridTwoColumn}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-grid-men-column"}
                    component={ShopGridMenColumn}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-grid-women-column"}
                    component={ShopGridWomenColumn}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-grid-kids-column"}
                    component={ShopGridKidsColumn}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}
                    component={ShopGridNoSidebar}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-grid-full-width"}
                    component={ShopGridFullWidth}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-grid-right-sidebar"}
                    component={ShopGridRightSidebar}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-list-standard/:_id"}
                    render={routeProps => (
                      <Product
                        {...routeProps}
                        key={routeProps.match.params._id}
                      />
                    )}
                    component={ShopListStandard}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-list-full-width"}
                    component={ShopListFullWidth}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shop-list-two-column"}
                    component={ShopListTwoColumn}
                  />
                  {/* Shop product pages */}
                  <Route
                    path={process.env.PUBLIC_URL + "/product/:id"}
                    render={routeProps => (
                      <Product
                        {...routeProps}
                        key={routeProps.match.params.id}
                      />
                    )}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/product-tab-left/:id"}
                    component={ProductTabLeft}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/product-tab-right/:id"}
                    component={ProductTabRight}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/product-sticky/:id"}
                    component={ProductSticky}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/product-slider/:id"}
                    component={ProductSlider}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/room"}
                    component={Room}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/home"}
                    component={Home}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/product-fixed-image/:id"}
                    component={ProductFixedImage}
                  />
                  {/* Blog pages */}
                  <Route
                    path={process.env.PUBLIC_URL + "/blog-standard/:id"}
                    component={BlogStandard}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/blog-details-standard/:id"}
                    component={BlogDetailsStandard}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/blog-no-sidebar"}
                    component={BlogNoSidebar}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/blog-right-sidebar"}
                    component={BlogRightSidebar}
                  />
                  {/* astrology page path  */}
                  <Route
                    path={process.env.PUBLIC_URL + "/bannerSection"}
                    component={bannerSection}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/notificationlist"}
                    component={NotificationList}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/wallettransaclist"}
                    component={WalletTransacList}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/conversationList"}
                    component={ConversationList}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/astrorating"}
                    component={AstroRating}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/lalKitab"}
                    component={LalKitab}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/lalkitabPlanets"}
                    component={LalkitabPlanets}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/lalKitabPage"}
                    component={LalKitabPage}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/numerology"}
                    component={Numerology}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/tarot"}
                    component={Tarot}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/loveAstrologer"}
                    component={LoveAstrologer}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/shubhMuhurat"}
                    component={ShubhMuhurat}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/todayFestival"}
                    component={TodayFestival}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/luckyGemstone"}
                    component={LuckyGemstone}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/panchangPage"}
                    component={PanchangPage}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/todayPanchang"}
                    component={TodayPanchang}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/basicPanchang"}
                    component={BasicPanchang}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/bookEvent"}
                    component={BookEvent}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/otherpage"}
                    component={otherpage}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/bookEvent"}
                    component={BookEvent}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/Poojadetailpage/:id"}
                    component={Bookpoojadetail}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/paymentdetail"}
                    component={PaymentDetail}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/walletaddform"}
                    component={WalletAddForm}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/my-account"}
                    component={MyAccount}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/my-order"}
                    component={MyOrder}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/my-refund"}
                    component={MyRefund}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/mybookedpooja"}
                    component={Mypoojabooked}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/addEvent"}
                    component={AddEvent}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/addressform/:id"}
                    component={AddressForm}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/askquestion/:id"}
                    component={AskQuestion}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/askquestionList"}
                    component={AskQuestionList}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/orderHistory"}
                    component={OrderHistory}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/userChatHistoryList"}
                    component={UserChatHistoryList}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/userCallHistrory"}
                    component={UserCallHistrory}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/useVideoCallHistory"}
                    component={UseVideoCallHistory}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/userChatHistory"}
                    component={UserChatHistory}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/astroProfileVideo"}
                    component={AstroProfileVideo}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/walletmoney"}
                    component={WalletMoney}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/liveAstrologer"}
                    component={LiveAstrologer}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/live"}
                    component={LiveAllUser}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/profiledetail"}
                    component={ProfileDetail}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/TeamMemberOne"}
                    component={TeamMemberOne}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/ourworkflow"}
                    component={OurWorkFlow}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/predictionallhome"}
                    component={PredictionallHome}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/astrologerdetail/:id"}
                    component={AstrologerDetail}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/astrologersignup"}
                    component={AstrologerSignup}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/astrologerlogin"}
                    component={AstrologerLogin}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/astroteam"}
                    component={AstroTeam}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/freekundli"}
                    component={FreeKundli}
                  />
                   <Route
                  path={process.env.PUBLIC_URL + "/kundalireport"}
                  component={KundaliReport}
                />
                  <Route
                    path={process.env.PUBLIC_URL + "/manglikdosh"}
                    component={ManglikDosh}
                  />
                  <Route
                  path={process.env.PUBLIC_URL + "/varshphala"} 
                  component={VarshPhala}
                />
                 <Route
                    path={process.env.PUBLIC_URL + "/varshphalreport"}
                    component={VarshphalReport}
                  />
                  {/* <Route
                    path={process.env.PUBLIC_URL + "/planetdasha"}
                    component={PlanetDasha}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/vismshottariDasha"}
                    component={VismshottariDasha}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/yoginiDasha"}
                    component={YoginiDasha}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/charDasha"}
                    component={CharDasha}
                  /> */}

                  <Route
                    path={process.env.PUBLIC_URL + "/kalsharpdosh"}
                    component={KalsharpDosh}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/pitradosh"}
                    component={PitraDosh}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/sectionpooja"}
                    component={SectionPooja}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/aboutus"}
                    component={AboutUs}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/aboutdetail"}
                    component={AboutDetail}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/faq"}
                    component={FAQ}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/poojadetail/:id"}
                    component={PoojaDetail}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/consultantlist/:id"}
                    component={ConsultantList}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/addressformedit/:id"}
                    component={AddressFormEdit}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/cartlist/:id"}
                    component={CartList}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/heroscopesall"}
                    component={HeroscopesAll}
                  />
                  {/* <Route
                    path={process.env.PUBLIC_URL + "/heroscope/:id"}
                    component={HeroscopesDataList}
                  /> */}
                  <Route
                    path={process.env.PUBLIC_URL + "/heroscopestwo"}
                    component={HeroscopesTwo}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/heroscopestwo1"}
                    component={HeroscopesTwo1}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/heroscopestwo2"}
                    component={HeroscopesTwo2}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/heroscopestwo3"}
                    component={HeroscopesTwo3}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/heroscopestwo4"}
                    component={HeroscopesTwo4}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/horoscopedetail/:id"}
                    component={HoroscopeDetail}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/horoscopedetail1/:id"}
                    component={HoroscopeDetail1}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/horoscopedetail2/:id"}
                    component={HoroscopeDetail2}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/horoscopedetail3/:id"}
                    component={HoroscopeDetail3}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/zodicPage"}
                    component={ZodicPage}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/poojaProductList"}
                    component={PoojaProductList}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/astromallList"}
                    component={AstromallList}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/productlist/:id"}
                    component={ProductList}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/alertpage"}
                    component={AlertPage}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/customersupport"}
                    component={CustomerSupport}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/customersupportform"}
                    component={CustomerSupportForm}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/customersupportview"}
                    component={CustomerSupportView}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/userrequestform"}
                    component={UserRequestForm}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/userrequestformCall"}
                    component={UserRequestFormCall}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/CallListData"}
                    component={CallList}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/VideoListData"}
                    component={VideoList}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/ChatListData"}
                    component={ChatListData}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/userrequestformVideoCall"}
                    component={UserRequestFormVideoCall}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/ourservice"}
                    component={OurService}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/servicelist"}
                    component={ServiceList}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/allastrologerlist"}
                    component={AllAstrologerList}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/allastrochatlist"}
                    component={AllAstrochatList}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/WaitingPageCall"}
                    // path={process.env.PUBLIC_URL + "/waitingpage"}
                    component={WaitingPageCall}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/waitingpagechat"}
                    component={WaitingPagechat}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/waitingpagevideo"}
                    component={WaitingPagevideo}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/autosearch"}
                    component={AutoSearch}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/matchsearch"}
                    component={MatchSearch}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/sliderdemo"}
                    component={SliderDemo}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/sliderlist"}
                    component={SliderList}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/allMinRecharge"}
                    component={AllMinRecharge}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/chatRecharge"}
                    component={ChatRecharge}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/callRecharge"}
                    component={CallRecharge}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/videoCallRecharge"}
                    component={VideoRecharge}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/allMinRechargeCall"}
                    component={AllMinRechargeCall}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/allMinRechargeVideoCall"}
                    component={AllMinRechargeVideoCall}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/chatlist"}
                    component={ChatList}
                  />
                  {/* <Route
                    path={process.env.PUBLIC_URL + "/messageHistrory"}
                    component={MessageHistrory}
                  /> */}
                  <Route
                    path={process.env.PUBLIC_URL + "/chatApp"}
                    component={ChatApp}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/demochat"}
                    component={DemoChat}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/kundaliform"}
                    component={KundaliForm}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/kundalimatchlist"}
                    component={KundaliMatchList}
                  />
                  {/* Other pages */}
                  <Route
                    path={process.env.PUBLIC_URL + "/about"}
                    component={About}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/contact"}
                    component={Contact}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/faqPage"}
                    component={faqPage}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/privacyPolicy"}
                    component={privacyPolicy}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/TermsOfUse"}
                    component={TermsOfUse}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/login-register"}
                    component={LoginRegister}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/Password"}
                    component={Password}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/ResetPassword"}
                    component={ResetPassword}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/ForgotPassword"}
                    component={ForgotPassword}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/otpverify"}
                    component={OtpVerify}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/registerastro"}
                    component={RegisterAstro}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/completeproastro"}
                    component={CompleteProAstro}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/demovideocall"}
                    component={DemoVideoCall}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/democall"}
                    component={DemoCall}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/step"}
                    component={Step}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/Phone"}
                    component={Phone}
                  />
                  {/* // zegocloud // */}
                  <Route
                    path={process.env.PUBLIC_URL + "/livevideo"}
                    component={LiveVideo}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/videocall"}
                    component={VideoCall}
                  />
                  <Route
                    path={process.env.PUBLIC_URL + "/LiveStream"}
                    component={LiveStream}
                  />

                  <Route
                    path={process.env.PUBLIC_URL + "/call"}
                    component={Call}
                  />
                  {/* <Route
                  path={process.env.PUBLIC_URL + "/cart"}
                  component={Cart}
                /> */}
                  <Route
                    path={process.env.PUBLIC_URL + "/Otp"}
                    component={Otp}
                  />
                  <Route
                    render={() =>
                      localStorage.getItem("auth-token") ? (
                        <>
                          <Route
                            path={process.env.PUBLIC_URL + "/cart"}
                            component={Cart}
                          />

                          <Route
                            path={process.env.PUBLIC_URL + "/wishlist"}
                            component={Wishlist}
                          />
                          <Route
                            path={process.env.PUBLIC_URL + "/checkout"}
                            component={Checkout}
                          />
                        </>
                      ) : (
                        <Redirect
                          to={process.env.PUBLIC_URL + "/login-register"}
                        />
                      )
                    }
                  />
                  {/* <Route
                  path={process.env.PUBLIC_URL + "/wishlist"}
                  component={Wishlist}
                /> */}
                  <Route
                    path={process.env.PUBLIC_URL + "/compare"}
                    component={Compare}
                  />
                  {/* <Route
                  path={process.env.PUBLIC_URL + "/checkout"}
                  component={Checkout}
                /> */}
                  <Route
                    path={process.env.PUBLIC_URL + "/not-found"}
                    component={NotFound}
                  />
                  <Route exact component={NotFound} />
                </Switch>
              </HashRouter>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(multilanguage(App));
