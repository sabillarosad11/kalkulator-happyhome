import React, { useEffect, useState } from "react";
import convertRupiah from "rupiah-format";

const CicilanIdr = () => {

  const [tipeUnit, setTipeUnit] = useState();
  const [hargaJual, setHargaJual] = useState();
  const [hargaBeli, setHargaBeli] = useState();
  const [pilihCicilan, setPilihCicilan] = useState();
  const [bunga, setBunga] = useState();
  const [dp, setDp] = useState();
  const [diskon, setDiskon] = useState()
  const [lamaCicilan, setLamaCicilan] = useState()

  const handleUnit = (e) => {
    setTipeUnit(e.target.value);
  };

  const handleCicilan = (e) => {
    setPilihCicilan(e.target.value)
  }

  const handleLamaCicilan = (e) => {
    setLamaCicilan(e.target.value)
  }

  useEffect(() => {
    tipeUnit === "24/66"
      ? setHargaJual(200000000)
      : tipeUnit === "27/60"
      ? setHargaJual(230000000)
      : tipeUnit === "33/72"
      ? setHargaJual(300000000)
      : setHargaJual(0);

    setHargaBeli((1 - 12 / 100) * hargaJual);

    pilihCicilan === 'HHIT' ? setBunga(6/100) : pilihCicilan === 'BRI' ? setBunga(8.75/100) : setBunga(0)
    pilihCicilan === "HHIT"
      ? setDp(33.333333333 / 100)
      : pilihCicilan === "BRI"
      ? setDp(1 / 100)
      : setDp(5/100);
    // pilihCicilan === "HHIT"
    //   ? setBunga(6 / 100)
    //   : pilihCicilan === "BRI"
    //   ? setBunga(8.75 / 100)
    //   : setBunga(0);
    pilihCicilan === 'BRI' ? setDiskon(0) : setDiskon(6/100)
  },[hargaJual, pilihCicilan, tipeUnit]);

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
                value={convertRupiah.convert(hargaJual)}
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
                    value={convertRupiah.convert(hargaBeli)}
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
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={handleLamaCicilan}
              >
                <option selected>Pilih Periode</option>
                <option
                  value={
                    pilihCicilan === "BRI"
                      ? 5
                      : pilihCicilan === "HHIT"
                      ? 5
                      : null
                  }
                >
                  {pilihCicilan === "BRI"
                    ? "5 Tahun"
                    : pilihCicilan === "HHIT"
                    ? "5 Tahun"
                    : ""}
                </option>
                <option value={pilihCicilan === "BRI" ? 10 : null}>
                  {pilihCicilan === "BRI" ? "10 Tahun" : ""}
                </option>
                <option value={pilihCicilan === "BRI" ? 15 : null}>
                  {pilihCicilan === "BRI" ? "15 Tahun" : ""}
                </option>
              </select>
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
                <span className="text-rp">Rp</span>
                <span className="text-price">{dp * hargaBeli}</span>
              </div>
              <div className="d-flex align-items-end">
                <span className="text-rp">Rp</span>
                <span className="text-price">{Math.round(dp * hargaBeli)}</span>
              </div>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Lama Cicilan DP</p>
              <p className="text-bold">{lamaCicilan} Tahun</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Cicilan DP</p>
              <div className="d-flex">
                <p className="text-bold">
                  {convertRupiah.convert((dp * hargaBeli) / lamaCicilan)}
                </p>
                <p>/bulan</p>
              </div>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Plafon Cicilan</p>
              <p className="text-bold">
                {convertRupiah.convert(hargaBeli-(dp * hargaBeli))}
              </p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Bunga Cicilan</p>
              <p className="text-bold">{bunga*100}%</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex">
              <p className="text-bold">Keterangan:</p>
              <p className="ms-1">5 Tahun Fix Interest, setelah itu float</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CicilanIdr