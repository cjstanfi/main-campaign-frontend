import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getallPost} from "../../actions/action";
import SummaryViewSmall from "./SummaryViewSmall";
import useSmallViewNumbersAndRedux from "../../hooks/useSmallViewNumbersAndRedux";
import upperFirst from "../../helpers/utils/upper-first";
import formatUnderscores from "../../helpers/utils/format_underscores";


export default function TotalCount( {startDate, endDate}) {
    const { currentMarketingPlatformBusinessData: {marketingPlatformBusinessId} } = useSelector((state) => state.marketingPlatformBusiness)
    const { validDataArray: smallViewNumbers } = useSmallViewNumbersAndRedux(marketingPlatformBusinessId, startDate, endDate)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getallPost());
    }, []);
    const currentUser = useSelector((state) => {
        return state.data.datas;
    });


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
        <section className="stat-cards">
            <div className="container">
                <div className="slider_area">
                    <div className="row slider_wrap">
            {
                smallViewNumbers?.map(view => {
                    return <SummaryViewSmall title={formatUnderscores(view?.title)}
                                             amount={view?.valueDuringTimeframe}
                                             percent={view?.valuePercentChange}/>
                })
            }
                    </div>
                    <div className="pseduo-track"></div>
                </div>
            </div>
        </section>
    );
}
