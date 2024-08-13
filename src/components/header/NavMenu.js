import PropTypes from "prop-types";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import axiosConfig from "../../axiosConfig";
import Menu from "../Menu";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "reactstrap";
import { Bell } from "react-feather";
import { astroNotification } from "../../redux/actions/astoStatusAction";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  const [category, setCategoryList] = useState([]);
  const [walletmoney, setWalletMoney] = useState([]);
  const data = useSelector((state) => state.walletReducer);
  const [notificationCount, setNotificationCoount] = useState(0);

  const [isSearchVisible, setSearchVisible] = useState(true);

  const dispath = useDispatch();
  const notificationData = useSelector((state) => state.notificationData?.data);

  // console.log(walletmoney);
  const getCategory = () => {
    axiosConfig
      .get(`/admin/getallCategory`)
      .then((response) => {
        setCategoryList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCategory();
    // checkAstroStatus();
  }, []);

  useEffect(() => {
    if (Object.keys(notificationData).length > 0) {
      setNotificationCoount(1);
    }
    // checkAstroStatus();
  }, [notificationData]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 100) {
        setSearchVisible(false); // Adjust the threshold as needed
      } else {
        setSearchVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSearchVisible]);

  const wallet = () => {
    let user_id = JSON.parse(localStorage.getItem("user_id"));
    axiosConfig
      .get(`/user/viewoneuser/${user_id}`)
      .then((response) => {
        // console.log("Wallet Money", response.data.data);
        setWalletMoney(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    wallet();
  }, []);

  const items = [
    {
      id: "1",
      image: "/assets/img/team/astro2.jpg",
      fbLink: "//www.facebook.com",
      twitterLink: "//www.twitter.com",
      instagramLink: "//www.instagram.com",
      name: "Mr.Mike Banding",
      position: "Manager",
    },
    {
      id: "2",
      image: "/assets/img/team/astro1.jpg",
      fbLink: "//www.facebook.com",
      twitterLink: "//www.twitter.com",
      instagramLink: "//www.instagram.com",
      name: "Mr.Peter Pan",
      position: "Developer",
    },
    {
      id: "3",
      image: "/assets/img/team/astro3.jpg",
      fbLink: "//www.facebook.com",
      twitterLink: "//www.twitter.com",
      instagramLink: "//www.instagram.com",
      name: "Ms.Sophia",
      position: "Designer",
    },
    {
      id: "4",
      image: "/assets/img/team/astro2.jpg",
      fbLink: "//www.facebook.com",
      twitterLink: "//www.twitter.com",
      instagramLink: "//www.instagram.com",
      name: "Mr.John Lee",
      position: "Chairman",
    },
  ];

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    // console.log('Focused')
  };

  // const checkAstroStatus=()=>{
  //   const astroid =localStorage.getItem('astro_id_to_notify');
  //   // if(astroid!=null){
  //   const astroCheckInterval =  setInterval(() => {
  //     axiosConfig
  //       .get(`/admin/getoneAstro/${astroid}`)
  //       .then(response => {
  //             if(response.data.data.status==="Online")
  //               {
  //                 setNotificationCoount(1);
  //                 const {fullname,status,_id}= response.data.data
  //                 dispath(astroNotification({fullname,status,_id,msg:"is now avaible to talk"}));
  //                 clearInterval(astroCheckInterval);
  //               }
  //         console.log(response.data.data.fullname);
  //         console.log(response.data.data.status);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }, 5000);
  //   // }

  // }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          id: {item.id}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {item.name}
        </span>
      </>
    );
  };

  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          </li>

          <li>
            <Link to="/kundaliform">Match Making</Link>
          </li>

          <li>
            <Link to="/freekundli"> Free Kundli</Link>
          </li>

          {/* <li>
            <Link to="/allastrologerlist">Talk Astrologer</Link>
          </li> */}

          {/* <li>
            <Link to="/liveAstrologer">Live Astrologer</Link>
          </li> */}
          <li>
            <Link to="#">Dosh</Link>
            <ul className="submenu" style={{ zIndex: 1000 }}>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/manglikdosh"}>
                  Manglik Dosh
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/pitraDosh"}>
                  Pitra Dosh
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/kalsharpDosh"}>
                  Kalsharp Dosh
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>Horoscopes</Link>
            <ul className="submenu" style={{ zIndex: 1000 }}>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/heroscopestwo3"}>
                  Tomorrow
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/heroscopestwo"}>
                  Daily
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/heroscopestwo1"}>
                  Weekly
                </Link>
              </li>
              <li className="">
                <Link to={process.env.PUBLIC_URL + "/heroscopestwo2"}>
                  Monthly
                </Link>
              </li>
            </ul>
          </li>

          <li className="">
            <Link to={process.env.PUBLIC_URL + "/astromallList"}>
              Astromall
            </Link>
          </li>
          <li className="">
            <Link
              to={process.env.PUBLIC_URL + "/walletmoney"}
              style={{
                textDecoration: "none",
                color: "black",
                // fontWeight: "bold",
              }}
            >
              {/* Available bal:<b>{data.amount}₹</b> */}
              Available bal:
              <b>
                {walletmoney.amount != null && !isNaN(walletmoney.amount)
                  ? Math.floor(walletmoney.amount)
                  : 0}
                ₹
              </b>
            </Link>
          </li>

          <li>
            <Link to="/notificationlist">
              <Bell size={21} />
              <Badge pill color="primary" className="badge-up bg-warning">
                {notificationCount == 0 ? "" : notificationCount}
              </Badge>
            </Link>
          </li>

          {/* <li>
            {/* <Link onclick={Menu()}>Menu</Link> */}
          {/*    </li> */}
        </ul>
      </nav>

      {/* <header
        className="App-header"
        style={{ position: "relative", zIndex: 999 }}
      >
        <div
         
          style={{
            position: "absolute",
            top: 0,
            left: "-10%",
            transform: "translateX(-50%)",
            width: isSearchVisible ? "50%" : 0,
            // overflow: "hidden",
          }}
        >
          <ReactSearchAutocomplete
            placeholder="Search Astrologer"
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </header> */}
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object,
};

export default React.memo(multilanguage(NavMenu));
