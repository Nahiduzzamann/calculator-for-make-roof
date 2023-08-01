import { useState } from "react";
import { useTranslation } from "react-i18next";

const Calculations = () => {
  const { t } = useTranslation();
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);
  const [show, setShow] = useState(false);

  const calculateSum = () => {
    const sumValue = number1 + number2;
    setSum(sumValue);
    if (sum !== 0) {
      setShow(true);
    }
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-xl lg:text-3xl pt-4 pb-4 text-white">
        {t("heading")}
      </h1>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              {show ? (
                <div> Sum: {sum} </div>
              ) : (
                <div>
                  <h1 className="text-5xl font-bold">Calculate now!</h1>
                  <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                </div>
              )}
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Number 1</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter a number"
                    className="input input-bordered"
                    value={number1}
                    onChange={(e) => setNumber1(parseInt(e.target.value, 10))}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Number 2</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter a number"
                    className="input input-bordered"
                    value={number2}
                    onChange={(e) => setNumber2(parseInt(e.target.value, 10))}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" onClick={calculateSum}>
                    Calculate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculations;
