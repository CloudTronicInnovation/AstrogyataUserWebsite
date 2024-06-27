import React from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";

class HoroscopeDetail3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zodiacName: "",
            sun_sign: "",
            prediction_date: "",
            tomorrowHoroscope: {},
        };
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    componentDidMount() {
        let { id } = this.props.match.params;
        this.setState({ zodiacName: id });
        let payload = {
            zodiacName: id,
        };
        axiosConfig
            .post(`/user/tomorrowHoroscope`, payload)
            .then(response => {
                console.log("tomorrowHoroscope", response.data.data.prediction);
                this.setState({ tomorrowHoroscope: response.data.data });
            })

            .catch(error => {
                swal("Error!", "You clicked the button!", "error");
                console.log(error);
            });
    }
    submitHandler = e => {
        e.preventDefault();

        let payload = { zodiacName: this.state.zodiacName };
        axiosConfig
            .post(`/user/tomorrowHoroscope`, payload)
            .then(response => {
                console.log("tomorrowHoroscope", response.data.data.prediction);
                this.setState({ tomorrowHoroscope: response.data.data });
                console.log("tomorrowHoroscope1", response.data);
                // swal("Success!", "Submitted SuccessFull!", "success");
            })

            .catch(error => {
                // swal("Error!", "You clicked the button!", "error");
                console.log(error);
            });
    };

    render() {
        const { tomorrowHoroscope } = this.state;
        return (
            <LayoutOne headerTop="visible">
                <section className="pt-0 pb-0">
                    <div
                        className=""
                        style={{
                            // backgroundColor: "#ffcc01",
                            // width: "100%",
                            // padding: "70px 0px",
                            // backgroundSize: "cover",
                            float: "left",
                            width: "100%",
                            backgroundColor: "#272727",
                            position: "relative",
                            backgroundAttachment: "fixed",
                            backgroundSize: "cover",
                            color: "#ffffff",
                            padding: " 50px 0px 50px 0px",
                            backgroundImage: `url(${astrologinbg})`,
                            backgroundPosition: "center center",
                            backgroundRepeat: " no-repeat",
                            textAlign: "center",
                        }}
                    >
                        <Container>
                            <Row>
                                <Col md="12">
                                    <div className="leftcont text-left">
                                        <h1>Tomorrow  Horoscope</h1>
                                        <h3>{tomorrowHoroscope?.prediction_date}</h3>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
                <section className="ptb-0">
                    <Container>
                        <form onSubmit={this.submitHandler}>
                            <Row>
                                <Col lg="4">
                                    <div className="scope-st">
                                        <h3>SELECT OTHER SIGN</h3>
                                        <p>
                                            Zodiac signs refer to the 12 astrological signs that are
                                            based on the position of the sun at the time of a person's
                                            birth. The 12 zodiac signs are:
                                        </p>
                                        <Input
                                            className="form-control"
                                            type="select"
                                            name="zodiacName"
                                            placeholder="Enter rashi"
                                            value={this.state.zodiacName}
                                            onChange={this.changeHandler}
                                        >
                                            <option value="select">---Select---</option>
                                            <option value="aries">Aries</option>
                                            <option value="taurus">Taurus</option>
                                            <option value="gemini">Gemini</option>
                                            <option value="cancer">Cancer</option>
                                            <option value="leo">Leo</option>
                                            <option value="virgo">Virgo</option>
                                            <option value="libra">Libra</option>
                                            <option value="scorpio">Scorpio</option>
                                            <option value="sagittarius">Sagittarius</option>
                                            <option value="capricorn">Capricorn</option>
                                            <option value="aquarius">Aquarius</option>
                                            <option value="pisces">Pisces</option>
                                        </Input>
                                        <Button className="btn btn-warning">submit</Button>
                                    </div>
                                </Col>
                                <Col lg="8">
                                    <div className="scope-1">
                                        <h3>Rashi Name</h3>

                                        <p>{tomorrowHoroscope?.sun_sign?.toUpperCase(0)}</p>

                                        <h3>Personal Life</h3>
                                        <p>{tomorrowHoroscope?.prediction?.personal_life}</p>

                                        <h3>Profession</h3>
                                        <p>{tomorrowHoroscope?.prediction?.profession}</p>

                                        <h3>Health</h3>
                                        <p>{tomorrowHoroscope?.prediction?.health}</p>

                                        <h3>Travel</h3>
                                        <p>{tomorrowHoroscope?.prediction?.travel}</p>

                                        <h3>Luck</h3>
                                        <p>{tomorrowHoroscope?.prediction?.luck}</p>

                                        <h3>Emotions</h3>
                                        <p>{tomorrowHoroscope?.prediction?.emotions}</p>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </Container>
                </section>
            </LayoutOne>
        );
    }
}
export default HoroscopeDetail3;
