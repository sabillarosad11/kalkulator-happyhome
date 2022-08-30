import React, { useEffect, useMemo, useState } from "react";

const InvestasiIdr = () => {
  const homes = useMemo(() => [
    {id:"1", name:"The Leaf Mansion"},
    {id:"2", name:"The Leaf Platinum"},
    {id:"3", name:"The Leaf Residence"},
  ],[])

  const units = useMemo(() => [
    {perumahanId:"1", name:"Cluster Fuschia 27/60", value:"27/60"},
    {perumahanId:"1", name:"Cluster Adenium 27/60", value:"27/60"},
    {perumahanId:"1", name:"Cluster Bougenville 33/72", value:"33/72"},
    {perumahanId:"2", name:"Tipe 30/60", value:"30/60"},
    {perumahanId:"2", name:"Tipe 33/60", value:"33/60"},
    {perumahanId:"2", name:"Tipe 32/70", value:"32/70"},
    {perumahanId:"3", name:"Cluster Adenium 27/60", value:"27/60"},
    {perumahanId:"3", name:"Cluster Alamanda 24/66", value:"24/66"},
    {perumahanId:"3", name:"Cluster Alamanda 24/72", value:"24/72"},
    {perumahanId:"3", name:"Cluster Bougenville 33/72", value:"33/72R"},
    {perumahanId:"3", name:"Cluster Dahlia 35/72", value:"35/72"},
    {perumahanId:"3", name:"Cluster Dahlia 52/72", value:"52/72"},
    {perumahanId:"3", name:"Cluster Fuschia 28/60", value:"28/60"},
    {perumahanId:"3", name:"Cluster Gardenia 28/60", value:"28/60"},
    {perumahanId:"3", name:"Cluster Gardenia 30/72", value:"30/72"},
    {perumahanId:"3", name:"Cluster Gardenia 36/72", value:"36/72"},
  ],[])

  const [perumahan, setPerumahan] = useState([])
  const [unit, setUnit] = useState([])
  const [jumlah, setJumlah] = useState(1);
  const [tipeUnit, setTipeUnit] = useState();
  const [hargaJual, setHargaJual] = useState();
  const [hargaBeli, setHargaBeli] = useState();
  const [dp, setDp] = useState();
  const [periode, setPeriode] = useState();
  const [durasi, setDurasi] = useState();
  const [check, setCheck] = useState();
  const [investasiAwal, setInvestasiAwal] = useState();

  const [tabelUntung1, setTabelUntung1] = useState();
  const [tabelUntung2, setTabelUntung2] = useState();
  const [tabelUntung3, setTabelUntung3] = useState();
  const [tabelUntung4, setTabelUntung4] = useState();
  const [tabelUntung5, setTabelUntung5] = useState();
  const [tabelUnit1, setTabelUnit1] = useState();
  const [tabelUnit2, setTabelUnit2] = useState();
  const [tabelUnit3, setTabelUnit3] = useState();
  const [tabelUnit4, setTabelUnit4] = useState();
  const [tabelUnit5, setTabelUnit5] = useState();
  const [totalKeuntungan, setTotalKeuntungan] = useState();
  const [persenUntung, setPersenUntung] = useState();
  const [apy, setApy] = useState();
  const [untungPenjualan, setUntungPenjualan] = useState()

  const handlePerumahan = (id) => {
    console.log(id)
    const dc = units.filter(x => x.perumahanId === id)
    setUnit(dc)
  }
  
  const handlePlus = () => {
    setJumlah(jumlah + 1);
  };

  const handleMinus = () => {
    if (jumlah > 0) {
      setJumlah(jumlah - 1);
    }
  };

  const handleUnit = (e) => {
    setTipeUnit(e.target.value);
  };

  const handlePeriode = (e) => {
    setPeriode(e.target.value);
  };

  const handleDurasi = (e) => {
    setDurasi(e.target.value);
  };

  const handleCheck = (e) => {
    setCheck(e.target.checked);
  };

   function numberWithCommas(y) {
     return y.toString().replace(/\B(?<!\.\d* )(?=(\d{3})+(?!\d))/g, ",");
   }

  function handleNan(x) {
    if (isNaN(x)) {
      return 0
    }
    return x;
  }

  useEffect(() => {
    setPerumahan(homes);
    tipeUnit === "27/60"
      ? setHargaJual(220000000)
      : tipeUnit === "33/72"
      ? setHargaJual(285000000)
      : tipeUnit === "30/60"
      ? setHargaJual(189000000)
      : tipeUnit === "33/60" 
      ? setHargaJual(189000000)
      : tipeUnit === "32/70" 
      ? setHargaJual(250000000)
      : tipeUnit === "27/60" 
      ? setHargaJual(220000000)
      : tipeUnit === "24/66" 
      ? setHargaJual(305000000)
      : tipeUnit === "24/72" 
      ? setHargaJual(322000000)
      : tipeUnit === "33/72R" 
      ? setHargaJual(349000000)
      : tipeUnit === "35/72" 
      ? setHargaJual(339000000)
      : tipeUnit === "52/72" 
      ? setHargaJual(449000000)
      : tipeUnit === "28/60" 
      ? setHargaJual(168000000)
      : tipeUnit === "30/72" 
      ? setHargaJual(323000000)
      : tipeUnit === "36/72" 
      ? setHargaJual(333000000)
      : setHargaJual(0);

    setHargaBeli((1 - 12 / 100) * hargaJual);

    setDp(Math.round(hargaBeli * (33.33333333 / 100)));

    setInvestasiAwal(jumlah * dp);

    let durasiArray = [];
    for (let i = 0; i <= periode; i++) {
      if (i % durasi === 0) {
        durasiArray.push(i);
      }
    }
    // console.log("bulan", durasiArray);

    let hargaUnitInvestasi = [];
    for (let i = 0; i < durasiArray.length; i++) {
      hargaUnitInvestasi.push(
        Math.round(
          hargaBeli *
            (1 + (durasiArray[i] * (12.0 / 100)) / 12) *
            (33.33333333 / 100)
        )
      );
    }
    // console.log("harga unit investasi", hargaUnitInvestasi);

    let dataLain = [investasiAwal];
    let unitDibeli = [];
    let keuntungan = [];
    for (let i = 0; i < durasiArray.length; i++) {
      if (durasiArray[i] < periode) {
        if (durasiArray[i] === 0) {
          unitDibeli.push(Math.round(dataLain[i] / dp));
        } else {
          unitDibeli.push(Math.round(dataLain[i] / dp));
        }
        keuntungan.push(
          Math.round(
            hargaUnitInvestasi[i] * unitDibeli[i] * ((0.24 / 12) * durasi)
          )
        );
        if (check === true) {
          dataLain.push(keuntungan[i] + dataLain[i]);
        } else {
          dataLain.push(dataLain[0]);
        }
      }
    }
    // console.log("unit dibeli", unitDibeli);
    // console.log("keuntungan", keuntungan);
    // console.log("data lain", dataLain);

    let keuntungan1 = [];
    for (let i = 0; i < keuntungan.length; i++) {
      if (durasiArray[i] <= 12 && durasiArray[i] > 0) {
        keuntungan1.push(keuntungan[i]);
      }
    }
    console.log("keuntungan1", keuntungan1);
    let totalKeuntungan1 = keuntungan1.reduce((a, b) => a + b, 0);
    // console.log("totalKeuntungan1", totalKeuntungan1);

    let keuntungan2 = [];
    for (let i = 0; i < keuntungan.length; i++) {
      if (durasiArray[i] <= 24 && durasiArray[i] > 12) {
        keuntungan2.push(keuntungan[i]);
      }
    }
    console.log("keuntungan2", keuntungan2);
    let totalKeuntungan2 = keuntungan2.reduce((a, b) => a + b, 0);
    // console.log("totalKeuntungan2", totalKeuntungan2);

    let keuntungan3 = [];
    for (let i = 0; i < keuntungan.length; i++) {
      if (durasiArray[i] <= 36 && durasiArray[i] > 24) {
        keuntungan3.push(keuntungan[i]);
      }
    }
    console.log("keuntungan3", keuntungan3);
    let totalKeuntungan3 = keuntungan3.reduce((a, b) => a + b, 0);
    // console.log("totalKeuntungan3", totalKeuntungan3);

    let keuntungan4 = [];
    for (let i = 0; i < keuntungan.length; i++) {
      if (durasiArray[i] <= 48 && durasiArray[i] > 36) {
        keuntungan4.push(keuntungan[i]);
      }
    }
    console.log("keuntungan4", keuntungan4);
    let totalKeuntungan4 = keuntungan4.reduce((a, b) => a + b, 0);
    // console.log("totalKeuntungan4", totalKeuntungan4);

    let keuntungan5 = [];
    for (let i = 0; i < keuntungan.length; i++) {
      if (durasiArray[i] <= 60 && durasiArray[i] > 48) {
        keuntungan5.push(keuntungan[i]);
      }
    }
    // console.log("keuntungan5", keuntungan5);
    let totalKeuntungan5 = keuntungan5.reduce((a, b) => a + b, 0);
    // console.log("totalKeuntungan5", totalKeuntungan5);

    let unitDibeli1 = [];
    for (let i = 0; i < unitDibeli.length; i++) {
      if (durasiArray[i] <= 12 && durasiArray[i] > 0) {
        unitDibeli1.push(unitDibeli[i]);
      }
    }
    // console.log("unitDibeli1", unitDibeli1);
    let totalUnit1 = unitDibeli1.reduce((a, b) => a + b, 0);
    // console.log("totalUnit1", totalUnit1);

    let unitDibeli2 = [];
    for (let i = 0; i < unitDibeli.length; i++) {
      if (durasiArray[i] <= 24 && durasiArray[i] > 12) {
        unitDibeli2.push(unitDibeli[i]);
      }
    }
    console.log("unitDibeli2", unitDibeli2);
    let totalUnit2 = unitDibeli2.reduce((a, b) => a + b, 0);
    // console.log("totalUnit2", totalUnit2);

    let unitDibeli3 = [];
    for (let i = 0; i < unitDibeli.length; i++) {
      if (durasiArray[i] <= 36 && durasiArray[i] > 24) {
        unitDibeli3.push(unitDibeli[i]);
      }
    }
    console.log("unitDibeli3", unitDibeli3);
    let totalUnit3 = unitDibeli3.reduce((a, b) => a + b, 0);
    // console.log("totalUnit3", totalUnit3);

    let unitDibeli4 = [];
    for (let i = 0; i < unitDibeli.length; i++) {
      if (durasiArray[i] <= 48 && durasiArray[i] > 36) {
        unitDibeli4.push(unitDibeli[i]);
      }
    }
    console.log("unitDibeli4", unitDibeli4);
    let totalUnit4 = unitDibeli4.reduce((a, b) => a + b, 0);
    // console.log("totalUnit4", totalUnit4);

    let unitDibeli5 = [];
    for (let i = 0; i < unitDibeli.length; i++) {
      if (durasiArray[i] <= 60 && durasiArray[i] > 48) {
        unitDibeli5.push(unitDibeli[i]);
      }
    }
    console.log("unitDibeli5", unitDibeli5);
    let totalUnit5 = unitDibeli5.reduce((a, b) => a + b, 0);
    // console.log("totalUnit5", totalUnit5);

    setTabelUntung1(totalKeuntungan1);
    setTabelUntung2(totalKeuntungan2);
    setTabelUntung3(totalKeuntungan3);
    setTabelUntung4(totalKeuntungan4);
    setTabelUntung5(totalKeuntungan5);
    setTabelUnit1(totalUnit1);
    setTabelUnit2(totalUnit2);
    setTabelUnit3(totalUnit3);
    setTabelUnit4(totalUnit4);
    setTabelUnit5(totalUnit5);
    setTotalKeuntungan(
      tabelUntung1 + tabelUntung2 + tabelUntung3 + tabelUntung4 + tabelUntung5
    );
    setPersenUntung((totalKeuntungan / investasiAwal) * 100);
    setApy((1 + persenUntung / 100) ** (1 / (periode / 12)) - 1);
    setUntungPenjualan(hargaJual - hargaBeli);

    console.log(typeof(hargaJual))
  }, [
    tipeUnit,
    hargaJual,
    hargaBeli,
    jumlah,
    dp,
    investasiAwal,
    tabelUntung1,
    tabelUntung2,
    tabelUntung3,
    tabelUntung4,
    tabelUntung5,
    totalKeuntungan,
    persenUntung,
    periode,
    durasi,
    check,homes,units
  ]);

  return (
    <div className="container-sm contener">
      <div className="mb-4">
        <h1>Kalkulator Investasi</h1>
      </div>
      <div className="row row-mb gx-2"> 
        <div className="col-sm-6">
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Perumahan
            </label>
            <div className="col-sm-8">
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(e) => handlePerumahan(e.target.value)}
              >
                <option selected>Pilih Perumahan</option>
                {
                  perumahan && perumahan !== undefined ?
                  perumahan.map((p, index) => {
                    return(
                      <option key={index} value={p.id}>{p.name}</option>
                    )
                  }) : "No Perumahan"
                }
              </select>
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Tipe Unit
            </label>
            <div className="col-sm-8">
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={handleUnit}
              >
                <option selected>Pilih Tipe Unit</option>
                {
                  unit && unit !== undefined ? 
                  unit.map((u, index) => {
                    return(
                      <option key={index} value={u.value}>{u.name}</option>
                    )
                  }) : "No Data"
                }
              </select>
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Harga Jual
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control grey"
                id="inputPassword"
                value = {
                  `Rp ${numberWithCommas(Math.round(hargaJual))}`
                }
                disabled
              />
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Harga Beli
            </label>
            <div className="col-sm-8">
              <div className="row">
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control grey"
                    id="inputPassword"
                    value = {
                      `Rp ${numberWithCommas(Math.round(hargaBeli))}`
                    }
                    disabled
                  />
                </div>
                <div className="col-md-4">
                  <label
                    for="inputPassword"
                    className="col-form-label label-diskon"
                  >
                    <span className="me-1 text-diskon">Diskon</span>
                    <span className="text-value-diskon">12.00%</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Unit Dibeli
            </label>
            <div className="col-sm-5 d-flex counter">
              <button className="minus" onClick={handleMinus}>
                -
              </button>
              <input
                type="text"
                className="form-control"
                id="inputPassword"
                value={jumlah}
                readOnly
              />
              <button className="plus" onClick={handlePlus}>
                +
              </button>
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Lama Investasi
            </label>
            <div className="col-sm-8">
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={handlePeriode}
              >
                <option selected>Pilih Periode</option>
                <option value="6">6 Bulan</option>
                <option value="12">12 Bulan</option>
                <option value="18">18 Bulan</option>
                <option value="24">24 Bulan</option>
                <option value="30">30 Bulan</option>
                <option value="36">36 Bulan</option>
                <option value="42">42 Bulan</option>
                <option value="48">48 Bulan</option>
                <option value="54">54 Bulan</option>
                <option value="60">60 Bulan</option>
              </select>
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Durasi
            </label>
            <div className="col-sm-8">
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={handleDurasi}
              >
                <option selected>Pilih Durasi</option>
                <option value="4">4 Bulan</option>
                <option value="6">6 Bulan</option>
                <option value="8">8 Bulan</option>
                <option value="10">10 Bulan</option>
                <option value="12">12 Bulan</option>
              </select>
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Auto Reinvest
            </label>
            <div className="col-sm-8">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexCheckChecked"
                onChange={handleCheck}
              ></input>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="card card-detail">
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Harga Jual</p>
              <p className="text-bold text-right">
                Rp {periode && durasi ? numberWithCommas(Math.round(hargaJual)) : 0}
              </p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Diskon</p>
              <p className="text-bold">{periode && durasi ? 12.00 : 0}%</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Harga Beli</p>
              <p className="text-bold">
                Rp {periode && durasi ? numberWithCommas(Math.round(hargaBeli)) : 0}
              </p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>DP</p>
              <p className="text-bold">Rp {periode && durasi ? numberWithCommas(Math.round(dp)) : 0}</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Pelunasan HappyHomes</p>
              <p className="text-bold">
                Rp {periode && durasi ? numberWithCommas(Math.round(hargaBeli - dp)) : 0}
              </p>
            </div>
            <hr />
            <div className="text-wrapper d-flex flex-column align-items-center text-bold">
              <p>Keuntungan Penjualan</p>
              <p className="price-column">
                Rp {periode && durasi ? numberWithCommas(Math.round(untungPenjualan)) : 0}
              </p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between mb-4 text-bold">
              <div className="text-wrapper d-flex flex-column align-items-center">
                <p className="text-center">Keuntungan HHIT</p>
                <p className="price-column text-center">
                  Rp {periode && durasi ? numberWithCommas(Math.round(untungPenjualan * (2 / 3))) : 0}
                </p>
              </div>
              <div className="text-wrapper d-flex flex-column align-items-center">
                <p className="text-center">Keuntungan</p>
                <p className="price-column text-center">Investmen Buyer</p>
                <p className="price-column text-center">
                  Rp {periode && durasi ? numberWithCommas(Math.round(untungPenjualan * (1 / 3))) : 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-mb">
        <div className="col-12 col-md-6">
          <table className="table table-borderless">
            <thead>
              <tr>
                <td>Tahun</td>
                <td className="pink">Keuntungan</td>
                <td>Unit Dibeli</td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-row">
                <td>1</td>
                <td className="pink text-bold">
                  Rp {numberWithCommas(Math.round(tabelUntung1))}
                </td>
                <td>{tabelUnit1}</td>
              </tr>
              <tr className="border-row">
                <td>2</td>
                <td className="pink text-bold">
                  Rp {numberWithCommas(Math.round(tabelUntung2))}
                </td>
                <td>{tabelUnit2}</td>
              </tr>
              <tr className="border-row">
                <td>3</td>
                <td className="pink text-bold">
                  Rp {numberWithCommas(Math.round(tabelUntung3))}
                </td>
                <td>{tabelUnit3}</td>
              </tr>
              <tr className="border-row">
                <td>4</td>
                <td className="pink text-bold">
                  Rp {numberWithCommas(Math.round(tabelUntung4))}
                </td>
                <td>{tabelUnit4}</td>
              </tr>
              <tr className="border-radius">
                <td>5</td>
                <td className="pink text-bold">
                  Rp {numberWithCommas(Math.round(tabelUntung5))}
                </td>
                <td>{tabelUnit5}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="card card-keuntungan">
            <div className="text-total">Total Keuntungan</div>
            <div className="d-flex align-items-end">
              <span className="text-rp">Rp</span>
              <span className="text-price">
                {numberWithCommas(Math.round(totalKeuntungan))}
              </span>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Investasi Awal</p>
              <p className="text-bold">
                Rp {periode && durasi ? numberWithCommas(Math.round(investasiAwal)) : 0}
              </p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>% Keuntungan</p>
              <p className="text-bold">
                {handleNan(Math.round(persenUntung))}%
              </p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>APY</p>
              <p className="text-bold">{handleNan(Math.round(apy * 100))}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestasiIdr;
