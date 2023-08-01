import { useState } from "react";
import { useTranslation } from "react-i18next";

const Calculations = () => {
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
      const amountOfRod = ((((length * 12) / 5)+1)*width) + ((((width * 12) / 5)+1)*length); //feet
      const weightOfRod = ((rodD * rodD) / 532.2) * amountOfRod;
      const calculation ={
        amountOfCementBags,amountOfSand,amountOfBricks,weightOfRod
      }
      setCalculation(calculation);
    } else {
      setCalculation(null);
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
              {calculation !== null ? (
                <div className="text-white text-xl lg:text-2xl">
                  <div> সিমেন্ট এর পরিমান: <span className="text-red-500">{Math.ceil(calculation.amountOfCementBags)} ব্যাগ</span></div>
                  <div> বালু এর পরিমান: <span className="text-red-500">{Math.ceil(calculation.amountOfSand)} ঘনফুট/সিএফটি</span></div>
                  <div>খোয়া এর পরিমান: <span className="text-red-500">{Math.ceil(calculation.amountOfBricks)} টি ইট থেকে তৈরি খোয়া</span></div>
                  <div>মোট রডের পরিমান: <span className="text-red-500">{Math.ceil(calculation.weightOfRod)} কেজি</span> | <span className="text-red-300">(আরও ৫-১০% অপচয় এর জন্য বাড়তি রডের দরকার হবে)</span></div>
                </div>
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
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
