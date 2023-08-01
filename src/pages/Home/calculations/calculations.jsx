import { useState } from "react";
import { useTranslation } from "react-i18next";

const Calculations = () => {
  const { t } = useTranslation();
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [sum, setSum] = useState('');

  const handleNumberChange = (e, setNumber) => {
    const value = e.target.value;
    setNumber(value);
  };
  const calculateSum = () => {
    const num1 = parseInt(number1, 10);
    const num2 = parseInt(number2, 10);

    if (!isNaN(num1) && !isNaN(num2)) {
      setSum(num1 + num2);
    } else {
      setSum("");
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl lg:text-3xl pt-4 pb-4 text-white">
        {t("heading")}
      </h1>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              {sum !== '' ? (
                <div> Sum: {sum} </div>
              ) : (
                <div>
                  <h1 className="text-3xl lg:text-5xl font-bold text-white">{t("calculate.title")}</h1>
                  <p className="py-6 text-white text-xl lg:text-2xl">
                    {t("calculate.descriptions")}
                  </p>
                </div>
              )}
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-2xl font-bold">{t("form.field1")}</span>
                  </label>
                  <input
                    type="number"
                    placeholder={t("form.fieldPlaceholder")}
                    className="input input-bordered"
                    value={number1}
                    onChange={(e) => handleNumberChange(e, setNumber1)}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-2xl font-bold">{t("form.field2")}</span>
                  </label>
                  <input
                    type="number"
                    placeholder={t("form.fieldPlaceholder")}
                    className="input input-bordered"
                    value={number2}
                    onChange={(e) => handleNumberChange(e, setNumber2)}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-2xl font-bold">{t("form.field3")}</span>
                  </label>
                  <input
                    type="number"
                    placeholder={t("form.fieldPlaceholder")}
                    className="input input-bordered"
                    value={number3}
                    onChange={(e) => handleNumberChange(e, setNumber3)}
                    required
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
