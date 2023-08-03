import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Calculations = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { t } = useTranslation();
  const [cement, setCement] = useState(1);
  const [sand, setSand] = useState(2);
  const [gravel, setGravel] = useState(4);
  const [rod, setRod] = useState(5);
  const [rodD, setRodD] = useState(12);
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [calculation, setCalculation] = useState(null);

  const handleNumberChange = (e, setNumber) => {
    const value = e.target.value;
    setNumber(value);
  };
  const calculate = () => {
    const length = parseInt(number1, 10);
    const width = parseInt(number2, 10);
    const thickness = parseInt(number3, 10);

    if (!isNaN(length) && !isNaN(width) && !isNaN(thickness)) {
      // const roofArea = length * width;
      const roofVolume = length * width * (thickness / 12); // (৫/১২ ইঞ্চি কে ফিট হিসেবে)
      const roofWetVolume = roofVolume * 1.5;
      const sumOfRatios = cement + sand + gravel;
      const amountOfCement = (roofWetVolume * cement) / sumOfRatios;
      const amountOfCementBags = amountOfCement / 1.25; // (১.২৫ ঘনফিট/সিএফটি = ১ ব্যাগ)
      const amountOfSand = (roofWetVolume * sand) / sumOfRatios;
      const amountOfGravel = (roofWetVolume * gravel) / sumOfRatios;
      const amountOfBricks = amountOfGravel / 0.068; //(১ টি ইট = ০.০৬৮ ঘনফিট/সিএফটি)
      const amountOfRod =
        ((length * 12) / 5 + 1) * width + ((width * 12) / 5 + 1) * length; //feet
      const weightOfRod = ((rodD * rodD) / 532.2) * amountOfRod;
      const calculation = {
        amountOfCementBags,
        amountOfSand,
        amountOfBricks,
        weightOfRod,
      };
      setCalculation(calculation);
    } else {
      setCalculation(null);
    }
  };

  return (
    <div className="container mx-auto">
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              {calculation !== null ? (
                user ? (
                  <div className="text-white text-xl lg:text-2xl">
                    <div>
                      {t("result.cement")}:{" "}
                      <span className="text-red-500">
                        {Math.ceil(calculation.amountOfCementBags)}{" "}
                        {t("result.cementValue")}
                      </span>
                    </div>
                    <div>
                      {" "}
                      {t("result.sand")}:{" "}
                      <span className="text-red-500">
                        {Math.ceil(calculation.amountOfSand)}{" "}
                        {t("result.sandValue")}
                      </span>
                    </div>
                    <div>
                      {t("result.gravel")}:{" "}
                      <span className="text-red-500">
                        {Math.ceil(calculation.amountOfBricks)}{" "}
                        {t("result.gravelValue")}
                      </span>
                    </div>
                    <div>
                      {t("result.rod")}:{" "}
                      <span className="text-red-500">
                        {Math.ceil(calculation.weightOfRod)}{" "}
                        {t("result.rodValue")}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <Link
                      to="/login"
                      className="flex items-center justify-center absolute bg-opacity-70 bg-[#000000] h-full w-full rounded-lg"
                    >
                      {" "}
                      <p className="text-white text-2xl hover:text-gray-400">
                        Please LogIn to see result
                      </p>{" "}
                    </Link>
                    <div className="text-white text-xl lg:text-2xl p-2">
                      <div>
                        {t("result.cement")}:{" "}
                        <span className="text-[#c547470c]">
                          {Math.ceil(calculation.amountOfCementBags)}{" "}
                          {t("result.cementValue")}
                        </span>
                      </div>
                      <div>
                        {" "}
                        {t("result.sand")}:{" "}
                        <span className="text-[#c547470c]">
                          {Math.ceil(calculation.amountOfSand)}{" "}
                          {t("result.sandValue")}
                        </span>
                      </div>
                      <div>
                        {t("result.gravel")}:{" "}
                        <span className="text-[#c547470c]">
                          {Math.ceil(calculation.amountOfBricks)}{" "}
                          {t("result.gravelValue")}
                        </span>
                      </div>
                      <div>
                        {t("result.rod")}:{" "}
                        <span className="text-[#c547470c]">
                          {Math.ceil(calculation.weightOfRod)}{" "}
                          {t("result.rodValue")}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              ) : (
                <div>
                  <h1 className="text-3xl lg:text-5xl font-bold text-white">
                    {t("calculate.title")}
                  </h1>
                  <p className="py-6 text-white text-xl lg:text-2xl">
                    {t("calculate.descriptions")}
                  </p>
                </div>
              )}
            </div>
            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-2xl font-bold">
                      {t("form.field1")}
                    </span>
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
                    <span className="label-text text-2xl font-bold">
                      {t("form.field2")}
                    </span>
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
                    <span className="label-text text-2xl font-bold">
                      {t("form.field3")}
                    </span>
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-bold">
                      {t("form.field4")}
                    </span>
                  </label>
                  <div className="flex justify-center items-center">
                    <input
                      type="number"
                      className="w-16 input input-bordered"
                      value={cement}
                      onChange={(e) => setCement(parseInt(e.target.value, 10))}
                    />
                    <span className="p-2 text-2xl font-bold">:</span>
                    <input
                      type="number"
                      className="w-16 input input-bordered"
                      value={sand}
                      onChange={(e) => setSand(parseInt(e.target.value, 10))}
                    />
                    <span className="p-2 text-2xl font-bold">:</span>
                    <input
                      type="number"
                      className="w-16 input input-bordered"
                      value={gravel}
                      onChange={(e) => setGravel(parseInt(e.target.value, 10))}
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-2xl font-bold">
                      {t("form.field5")}
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder={t("form.fieldPlaceholder")}
                    className="input input-bordered"
                    value={rod}
                    onChange={(e) => setRod(parseInt(e.target.value, 10))}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-2xl font-bold">
                      {t("form.field6")}
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder={t("form.fieldPlaceholder")}
                    className="input input-bordered"
                    value={rodD}
                    onChange={(e) => setRodD(parseInt(e.target.value, 10))}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" onClick={calculate}>
                    {t("form.btn")}
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
