import React, {useState, useEffect, useMemo} from "react";

const CicilanIdr = () => {
  const homes = useMemo(() => [
    {id:"1", name:"The Leaf Mansion"},
    {id:"2", name:"The Leaf Platinum"},
    {id:"3", name:"The Leaf Residence"},
  ],[])

  const units = useMemo(() => [
    {id:"1", perumahanId:"1", name:"Cluster Fuschia 27/60", value:"27/60F", metode:[{id:"1", name:"HHIT"}]},
    {id:"2", perumahanId:"1", name:"Cluster Adenium 27/60", value:"27/60A", metode:[{id:"2", name:"HHIT"}]},
    {id:"3", perumahanId:"1", name:"Cluster Bougenville 33/72", value:"33/72", metode:[{id:"3", name:"HHIT"}]},
    {id:"4", perumahanId:"2", name:"Tipe 30/60", value:"30/60", metode:[{id:"4", name:"Kas Keras"}, {id:"5", name:"HHIT"}, {id:"6", name:"BRI"}]},
    {id:"5", perumahanId:"2", name:"Tipe 33/60", value:"33/60", metode:[{id:"7", name:"Kas Keras"}, {id:"8", name:"HHIT"}, {id:"9", name:"BRI"}]},
    {id:"6", perumahanId:"2", name:"Tipe 32/70", value:"32/70", metode:[{id:"10", name:"Kas Keras"}, {id:"11", name:"HHIT"}, {id:"12", name:"BRI"}]},
    {id:"7", perumahanId:"3", name:"Cluster Adenium 27/60", value:"27/60A", metode:[{id:"13", name:"Kas Keras"}, {id:"14", name:"HHIT"}, {id:"15", name:"BRI"}]},
    {id:"8", perumahanId:"3", name:"Cluster Alamanda 24/66", value:"24/66", metode:[{id:"16", name:"Kas Keras"}, {id:"17", name:"HHIT"}, {id:"18", name:"BRI"}]},
    {id:"9", perumahanId:"3", name:"Cluster Alamanda 24/72", value:"24/72", metode:[{id:"19", name:"Kas Keras"}, {id:"20", name:"HHIT"}, {id:"21", name:"BRI"}]},
    {id:"10", perumahanId:"3", name:"Cluster Bougenville 33/72", value:"33/72R", metode:[{id:"22", name:"Kas Keras"}, {id:"23", name:"HHIT"}, {id:"34", name:"BRI"}]},
    {id:"11", perumahanId:"3", name:"Cluster Dahlia 35/72", value:"35/72", metode:[{id:"25", name:"Kas Keras"}, {id:"26", name:"HHIT"}, {id:"27", name:"BRI"}]},
    {id:"12", perumahanId:"3", name:"Cluster Dahlia 52/72", value:"52/72", metode:[{id:"28", name:"Kas Keras"}, {id:"29", name:"HHIT"}, {id:"30", name:"BRI"}]},
    {id:"13", perumahanId:"3", name:"Cluster Fuschia 28/60", value:"28/60F", metode:[{id:"31", name:"Kas Keras"}, {id:"32", name:"HHIT"}, {id:"33", name:"BRI"}]},
    {id:"14", perumahanId:"3", name:"Cluster Gardenia 28/60", value:"28/60G", metode:[{id:"34", name:"Kas Keras"}, {id:"35", name:"HHIT"}, {id:"36", name:"BRI"}]},
    {id:"15", perumahanId:"3", name:"Cluster Gardenia 30/72", value:"30/72", metode:[{id:"37", name:"Kas Keras"}, {id:"38", name:"HHIT"}, {id:"39", name:"BRI"}]},
    {id:"16", perumahanId:"3", name:"Cluster Gardenia 36/72", value:"36/72", metode:[{id:"40", name:"Kas Keras"}, {id:"41", name:"HHIT"}, {id:"42", name:"BRI"}]},
  ],[])

  const payments = useMemo(() => [{
      id: "1",
      name: "Kas Keras"
    },
    {
      id: "2",
      name: "HHIT"
    },
    {
      id: "3",
      name: "BRI"
    },
  ], []);

  const instalment = [{
      id: "1",
      paymentsId: "Kas Keras",
      name: "1 Tahun",
      value: 1
    },
    {
      id: "2",
      paymentsId: "HHIT",
      name: "5 Tahun",
      value: 5
    },
    {
      id: "3",
      paymentsId: "BRI",
      name: "5 Tahun",
      value: 5
    },
    {
      id: "4",
      paymentsId: "BRI",
      name: "10 Tahun",
      value: 10
    },
    {
      id: "5",
      paymentsId: "BRI",
      name: "15 Tahun",
      value: 15
    },
    {
      id: "6",
      paymentsId: "BRI",
      name: "20 Tahun",
      value: 20
    },
    {
      id: "7",
      paymentsId: "BRI",
      name: "25 Tahun",
      value: 25
    },
  ]

  const [perumahan, setPerumahan] = useState([])
  const [unit, setUnit] = useState(null);
  const [tipeUnit, setTipeUnit] = useState(null)
  const [unitId, setUnitId] = useState();
  const [hargaJual, setHargaJual] = useState();
  const [payment, setPayment] = useState([]);
  const [valuePembayaran, setValuePembayaran] = useState(null)
  const [pilihCicilan, setPilihCicilan] = useState([]);
  const [hargaBeli, setHargaBeli] = useState();
  const [textCicilan, setTextCicilan] = useState();
  const [dp, setDp] = useState();
  const [cicilDp, setCicilDp] = useState();
  const [bunga, setBunga] = useState();
  const [tc, setTc] = useState();
  const [lamaCicilan, setLamaCicilan] = useState();
  const [cicilan, setCicilan] = useState();
  const [diskon, setDiskon] = useState();
  

  const handlePerumahan = (id) => {
    console.log(id)
    setUnitId(id)
    const dc = units.filter(x => x.perumahanId === id)
    setUnit(dc)
    setTipeUnit(null)
    setValuePembayaran(null)
    setLamaCicilan(null)
  }

  const handleUnit = (e) => {
    setTipeUnit(e.target.value)
    const py = units.filter(x => x.value === e.target.value && x.perumahanId === unitId);
    console.log('py', py)
    setPayment(py[0].metode);
    setValuePembayaran(null)
    setLamaCicilan(null)
      // const xy = py.filter(x => x.perumahanId === unitId);
      // setPayment(xy[0].metode);
      // console.log 
  };

  const handleCicilan = (id) => {
    setValuePembayaran(id)
    const dc = instalment.filter(x => x.paymentsId === id)
    setPilihCicilan(dc)
    setLamaCicilan(null)
  }

  const handleLamaCicilan = (e) => {
    setLamaCicilan(e.target.value)
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d* )(?=(\d{3})+(?!\d))/g, ",");
  }

  function handleNan(x) {
    if (isNaN(x) || x === Infinity) {
      return 0;
    }
    return x;
  }
  useEffect(() => {
    setPerumahan(homes);
    console.log(tipeUnit)
    tipeUnit === "27/60F" ?
      setHargaJual(220000000) :
      tipeUnit === "27/60A" ?
      setHargaJual(220000000) :
      tipeUnit === "33/72" ?
      setHargaJual(285000000) :
      tipeUnit === "30/60" ?
      setHargaJual(189000000) :
      tipeUnit === "33/60" ?
      setHargaJual(189000000) :
      tipeUnit === "32/70" ?
      setHargaJual(250000000) :
      tipeUnit === "27/60" ?
      setHargaJual(220000000) :
      tipeUnit === "24/66" ?
      setHargaJual(305000000) :
      tipeUnit === "24/72" ?
      setHargaJual(322000000) :
      tipeUnit === "33/72R" ?
      setHargaJual(349000000) :
      tipeUnit === "35/72" ?
      setHargaJual(339000000) :
      tipeUnit === "52/72" ?
      setHargaJual(449000000) :
      tipeUnit === "28/60F" ?
      setHargaJual(168000000) :
      tipeUnit === "28/60G" ?
      setHargaJual(168000000) :
      tipeUnit === "30/72" ?
      setHargaJual(323000000) :
      tipeUnit === "36/72" ?
      setHargaJual(333000000) :
      setHargaJual(0);

    setHargaBeli(valuePembayaran === "Kas Keras" ? (hargaJual) * (1 - (6 / 100)) : valuePembayaran === "HHIT" ? (hargaJual) * (1 - (6 / 100)) : valuePembayaran === "BRI" ? (hargaJual) * 1 : 0);
    setTextCicilan(valuePembayaran === "Kas Keras" ? "Kas Keras" : valuePembayaran === "HHIT" ? "HHIT" : valuePembayaran === "BRI" ? "BRI" : "");
    setDp(valuePembayaran === "Kas Keras" ? 5 / 100 : valuePembayaran === "HHIT" ? 33.333333333 / 100 : valuePembayaran === "BRI" ? 1 / 100 : 0);
    setCicilDp(valuePembayaran === "Kas Keras" ? 3 : valuePembayaran === "HHIT" ? 1 : valuePembayaran === "BRI" ? 6 : 0);
    setDiskon(valuePembayaran === "Kas Keras" ? 6 : valuePembayaran === "HHIT" ? 6 : valuePembayaran === "BRI" ? 0 : 0);
    setBunga(valuePembayaran === "Kas Keras" ? 0 : valuePembayaran === "HHIT" ? 6 / 100 : valuePembayaran === "BRI" ? 8.75 / 100 : 0);
    setTc(valuePembayaran === "Kas Keras" ? "Dicicil 1 Tahun" : valuePembayaran === "HHIT" ? "Max 5 Tahun" : valuePembayaran === "BRI" ? "5 Tahun Fix Interest, setelah itu float" : "");

    console.log('lamacicilan',lamaCicilan)
    console.log('payment', payment)

    let r = (bunga * 100) / 12;
    let plafonCicilan = Math.round(hargaBeli - dp * hargaBeli);
    let n = lamaCicilan * 12
    // console.log('lamaCicilan',lamaCicilan)
    // console.log('plafonCicilan', plafonCicilan)
    // console.log('r', r)
    // console.log('n', n)
    r === 0 ?
      setCicilan(plafonCicilan / n) :
      setCicilan(plafonCicilan * (r/100 * (1 + (r/100))**n)/((1+(r/100))** n-1));
  }, [payments,lamaCicilan, bunga, dp, hargaBeli,homes, unit, payment, tipeUnit, valuePembayaran, hargaJual])

  return (
    <div className="container-sm contener">
      <div className="mb-4">
        <h1>Kalkulator Cicilan</h1>
        <span className="mb-4 text-simulasi">
          Simulasikan cicilan sewa dan cicilan KPR dengan mudah disini
        </span>
      </div>
      <div className="row row-mb gx-2">
        <div className="col-md-6">
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
                  perumahan.map((p) => {
                    return(
                      <option key={p.id} value={p.id}>{p.name}</option>
                    )
                  }) : "No Perumahan"
                }
              </select>
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Tipe Rumah
            </label>
            <div className="col-sm-8">
              <select class="form-select" aria-label="Default select example" onChange={handleUnit}>
                <option selected>Pilih Tipe Unit</option>
                {
                  unit && unit !== undefined ? 
                  unit.map((u) => {
                    return(
                      <option key={u.id} value={u.value}>{u.name}</option>
                    )
                  }) : "No Data"
                }
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
                value={hargaJual ? `Rp ${numberWithCommas(Math.round(hargaJual))}` : 0}
                disabled
              />
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Tipe Pembayaran
            </label>
            <div className="col-sm-8">
              <select class="form-select" aria-label="Default select example" onChange={(e) => handleCicilan(e.target.value)}>
                <option selected>Pilih Opsi Cicilan</option>
                {
                  payment && payment !== undefined ?
                  payment.map((p, index) => {
                    return(
                      <option key={p.id} value={p.name}>{p.name}</option>
                    )
                  }) : "No Payment"
                }
              </select>
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Harga Pembelian
            </label>
            <div className="col-sm-8">
              <div className="row">
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control grey"
                    id="inputPassword"
                    value = {
                      hargaBeli ? `Rp ${numberWithCommas(Math.round(hargaBeli))}` : 0
                    }
                    disabled
                  />
                </div>
                <div className="col-sm-4">
                  <label
                    for="inputPassword"
                    className="col-form-label label-diskon"
                  >
                    <span className="me-1 text-diskon">Diskon</span>
                    <span className="text-value-diskon">{diskon ? diskon : 0}%</span>
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
              <select class="form-select" aria-label="Default select example" onChange={handleLamaCicilan}>
                <option value={0}>
                  Pilih Periode Cicilan
                </option>
                {
                  pilihCicilan && pilihCicilan !== undefined ? 
                  pilihCicilan.map((l) => {
                    return(
                      <option key={l.id} value={l.value}>{l.name}</option>
                    )
                  }) : "No Data"
                }
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card card-detail card-cicilan">
            <div className="mt-4 text-wrapper d-flex justify-content-between">
              <p>Cicilan {textCicilan}</p>
              <p>Total DP</p>
            </div>
            <div className="mt-2 mb-2 text-wrapper d-flex justify-content-between">
              <div className="d-flex align-items-end">
                <span className="text-rp">Rp</span>
                <span className="text-price">
                  {
                    numberWithCommas(Math.round(handleNan(cicilan)))
                  }
                </span>
              </div>
              <div className="d-flex align-items-end">
                <span className="text-rp">Rp</span>
                <span className="text-price">
                  {
                    lamaCicilan && lamaCicilan !== undefined && lamaCicilan !== 0 ? numberWithCommas(Math.round(handleNan(dp * hargaBeli))) : 0
                  }
                </span>
              </div>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Lama Cicilan DP</p>
              <p className="text-bold">{lamaCicilan && lamaCicilan !== undefined && lamaCicilan !== 0 ? cicilDp : 0} Tahun</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Cicilan DP</p>
              <div className="d-flex">
                <p className="text-bold">
                  Rp {
                    lamaCicilan && lamaCicilan !== undefined ? numberWithCommas(Math.round(handleNan(((dp * hargaBeli) / cicilDp) / 12))) : 0
                  }
                </p>
                <p> /bulan</p>
              </div>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Plafon Cicilan</p>
              <p className="text-bold">
                Rp {
                  lamaCicilan && lamaCicilan !== undefined ? numberWithCommas(Math.round(handleNan(hargaBeli - (dp * hargaBeli)))) : 0
                }
              </p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Bunga Cicilan</p>
              <p className="text-bold">{lamaCicilan && lamaCicilan !== undefined ? handleNan(bunga * 100) : 0}%</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex">
              <p className="text-bold">Keterangan:</p>
              <p className="ms-1">{lamaCicilan && lamaCicilan !== undefined ? tc : 0}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CicilanIdr