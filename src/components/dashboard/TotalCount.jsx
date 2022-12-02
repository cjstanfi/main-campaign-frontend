import React, {useEffect} from "react";
import exclamation from "../../assets/img/exclamation.svg";
import pinkvector from "../../assets/img/pink-vector.svg";
// import Slider from "react-slick";
import greenvector from "../../assets/img/green-vector.svg";
import {useDispatch, useSelector} from "react-redux";
import {getallPost} from "../../actions/action";
import {Link} from "react-router-dom";
import SummaryViewSmall from "./SummaryViewSmall";

export default function TotalCount() {
    const { adSetData } = useSelector((state) => state.adSet)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getallPost());
    }, []);
    const currentUser = useSelector((state) => {
        return state.data.datas;
    });

    useEffect(() => {
        console.log(adSetData)
    }, [adSetData])

    var Revenue = currentUser.reduce(function (_this, val) {
        return _this + parseInt(val.Revenue);
    }, 0);

    var Ads = currentUser.reduce(function (_this, val) {
        return _this + val.Ads;
    }, 0);
    var Adsets = currentUser.reduce(function (_this, val) {
        return _this + val.Adsets;
    }, 0);
    var Leads = currentUser.reduce(function (_this, val) {
        return _this + val.Leads;
    }, 0);
    // var settings = {
    //   dots: false,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 4,
    //   slidesToScroll: 5,
    //   arrows: false,
    //   mobileFirst: true,
    //   responsive: [
    //     {
    //       breakpoint: 1200,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1,
    //       },
    //     },
    //     {
    //       breakpoint: 767,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //       },
    //     },
    //   ],
    // };
    return (
        // <section className="total-slider slider p-sm-0 slick-initialized slick-slider">
        <section className="row slider_wrap p-0">
            {/* <Slider {...settings}> */}
            {
                adSetData.map(adSet => {
                    return <SummaryViewSmall title={adSet?.facebookAdSetName} amount={adSet?.facebookAdSetSpend} percent="+%1.5"/>
                })
            }
            {/* </Slider> */}
        </section>
    );
}
