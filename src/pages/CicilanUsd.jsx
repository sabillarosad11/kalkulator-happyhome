import React, { useEffect, useState } from "react";

const CicilanUsd = () => {

  const [tipeUnit, setTipeUnit] = useState();
  const [hargaJual, setHargaJual] = useState();
  const [hargaBeli, setHargaBeli] = useState();
  const [pilihCicilan, setPilihCicilan] = useState();
  const [bunga, setBunga] = useState();
  const [dp, setDp] = useState();
  const [diskon, setDiskon] = useState();
  const [lamaCicilan, setLamaCicilan] = useState();
  const [cicilan, setCicilan] = useState();
  const [cicilDp, setCicilDp] = useState();
  const [cicilanBln, setCicilanBln] = useState();
  const [tc, setTc] = useState();

  const handleUnit = (e) => {
    setTipeUnit(e.target.value);
  };

  const handleCicilan = (e) => {
    setPilihCicilan(e.target.value);
  };

  const handleLamaCicilan = (e) => {
    setLamaCicilan(e.target.value);
  };


  function handleNan(x) {
    if (isNaN(x) || x === Infinity) {
      return 0;
    }
    return x;
  }

  useEffect(() => {
    tipeUnit === "24/66"
      ? setHargaJual(2000)
      : tipeUnit === "27/60"
      ? setHargaJual(2300)
      : tipeUnit === "33/72"
      ? setHargaJual(3000)
      : setHargaJual(0);

    // pilihCicilan === "BRI"
    //   ? setLamaCicilan(5)
    //   : pilihCicilan === "HHIT"
    //   ? setLamaCicilan(5)
    //   : pilihCicilan === "Kas Keras" ? setLamaCicilan(1) : setLamaCicilan(0);

    setHargaBeli((1 - 12 / 100) * hargaJual);

    pilihCicilan === "HHIT"
      ? setBunga(6 / 100)
      : pilihCicilan === "BRI"
      ? setBunga(8.75 / 100)
      : setBunga(0);

    pilihCicilan === "HHIT"
      ? setDp(33.333333333 / 100)
      : pilihCicilan === "BRI"
      ? setDp(1 / 100)
      : pilihCicilan === "Kas Keras"
      ? setDp(5 / 100)
      : setDp(0);

    pilihCicilan === "HHIT"
      ? setCicilDp(1)
      : pilihCicilan === "BRI"
      ? setCicilDp(6)
      : pilihCicilan === "Kas Keras"
      ? setCicilDp(3)
      : setCicilDp(0);

    pilihCicilan === "BRI" ? setDiskon(0) : setDiskon(6 / 100);

    cicilDp === 6
      ? setCicilanBln((dp * hargaBeli) / cicilDp / 12)
      : cicilDp === 3
      ? setCicilanBln((dp * hargaBeli) / cicilDp / 12)
      : cicilDp === 1
      ? setCicilanBln((dp * hargaBeli) / cicilDp / 12)
      : setCicilanBln(0);

    pilihCicilan === "HHIT"
      ? setTc("Max 5 Tahun")
      : pilihCicilan === "BRI"
      ? setTc("5 Tahun Fix Interest, setelah itu float")
      : pilihCicilan === "Kas Keras"
      ? setTc("Dicicil 1 Tahun")
      : setTc("");

    let r = (bunga * 100) / 12;
    // console.log('pilih cicilan', pilihCicilan)
    console.log("bunga", bunga * 100);
    console.log("r", r);
    console.log("r", typeof r);
    let plafonCicilan = Math.round(hargaBeli - dp * hargaBeli);
    console.log("plafon cicilan", plafonCicilan);
    let n = lamaCicilan * 12;
    console.log("lama cicilan", lamaCicilan);
    console.log("n", n);
    // r === 0 ? console.log(true) : console.log(false);
    console.log("dp", dp);

    r === 0
      ? setCicilan(plafonCicilan / n)
      : setCicilan(
          (plafonCicilan * (((r / 100) * (1 + r / 100)) ^ n)) /
            ((1 + r / 100) ^ (n - 1))
        );
  }, [
    hargaJual,
    pilihCicilan,
    tipeUnit,
    diskon,
    bunga,
    lamaCicilan,
    dp,
    cicilan,
    cicilDp,
    hargaBeli,
  ]);

  return (
    <div className="container-md p-5">
      <div className="mb-4">
        <h1>Kalkulator Cicilan</h1>
        <span className="mb-4 text-simulasi">
          Simulasikan cicilan sewa dan cicilan KPR dengan mudah disini
        </span>
      </div>
      <div className="row row-mb">
        <div className="col-md-6">
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Tipe Rumah
            </label>
            <div className="col-sm-8">
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={handleUnit}
              >
                <option selected>Pilih Tipe Unit</option>
                <option>24/66</option>
                <option>27/60</option>
                <option>33/72</option>
              </select>
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Harga Penjualan
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control grey"
                id="inputPassword"
                value={`$ ${hargaJual}`}
                disabled
              />
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Tipe Pembayaran
            </label>
            <div className="col-sm-8">
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={handleCicilan}
              >
                <option selected>Pilih Opsi Cicilan</option>
                <option value="Kas Keras">Kas Keras</option>
                <option value="HHIT">HHIT</option>
                <option value="BRI">BRI</option>
              </select>
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Harga Pembelian
            </label>
            <div className="col-sm-8">
              <div className="row">
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control grey"
                    id="inputPassword"
                    value={`$ ${hargaBeli}`}
                    disabled
                  />
                </div>
                <div className="col-sm-4">
                  <label
                    for="inputPassword"
                    className="col-form-label label-diskon"
                  >
                    <span className="me-1 text-diskon">Diskon</span>
                    <span className="text-value-diskon">5.88%</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Lama Cicilan
            </label>
            <div className="col-sm-8">
              {pilihCicilan === "BRI" ? (
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={handleLamaCicilan}
                >
                  <option value={0} selected>
                    Pilih Periode Cicilan
                  </option>
                  <option value={5}>5 Tahun</option>
                  <option value={10}>10 Tahun</option>
                  <option value={15}>15 Tahun</option>
                  <option value={20}>20 Tahun</option>
                </select>
              ) : pilihCicilan === "HHIT" ? (
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={handleLamaCicilan}
                >
                  <option value={0} selected>
                    Pilih Periode Cicilan
                  </option>
                  <option value={5}>5 Tahun</option>
                </select>
              ) : pilihCicilan === "Kas Keras" ? (
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={handleLamaCicilan}
                >
                  <option value={0} selected>
                    Pilih Periode Cicilan
                  </option>
                  <option value={1}>1 Tahun</option>
                </select>
              ) : (
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={handleLamaCicilan}
                >
                  <option value={0} selected>
                    Pilih Periode Cicilan
                  </option>
                </select>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card card-detail card-cicilan">
            <div className="mt-4 text-wrapper d-flex justify-content-between">
              <p>
                Cicilan{" "}
                {pilihCicilan === "BRI"
                  ? "BRI"
                  : pilihCicilan === "HHIT"
                  ? "HHIT"
                  : "Kas Keras"}
              </p>
              <p>Total DP</p>
            </div>
            <div className="mt-2 mb-2 text-wrapper d-flex justify-content-between">
              <div className="d-flex align-items-end">
                <span className="text-rp">$</span>
                <span className="text-price">
                  {Math.round(handleNan(cicilan))}
                </span>
              </div>
              <div className="d-flex align-items-end">
                <span className="text-rp">$</span>
                <span className="text-price">{Math.round(dp * hargaBeli)}</span>
              </div>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Lama Cicilan DP</p>
              <p className="text-bold">{cicilDp} Tahun</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Cicilan DP</p>
              <div className="d-flex">
                <p className="text-bold">$ {Math.round(cicilanBln)}</p>
                <p>/bulan</p>
              </div>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Plafon Cicilan</p>
              <p className="text-bold">
                $ {Math.round(hargaBeli - dp * hargaBeli)}
              </p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Bunga Cicilan</p>
              <p className="text-bold">{bunga * 100}%</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex">
              <p className="text-bold">Keterangan:</p>
              <p className="ms-1">{tc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CicilanUsd