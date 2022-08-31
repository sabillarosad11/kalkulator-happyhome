import React, {useState, useEffect, useMemo} from "react";

const CicilanIdr = () => {
  const homes = useMemo(() => [
    {id:"1", name:"The Leaf Mansion"},
    {id:"2", name:"The Leaf Platinum"},
    {id:"3", name:"The Leaf Residence"},
  ],[])

  const units = useMemo(() => [
    {perumahanId:"1", name:"Cluster Fuschia 27/60", value:"27/60F", metode:["HHIT"]},
    {perumahanId:"1", name:"Cluster Adenium 27/60", value:"27/60A", metode:["HHIT"]},
    {perumahanId:"1", name:"Cluster Bougenville 33/72", value:"33/72", metode:["HHIT"]},
    {perumahanId:"2", name:"Tipe 30/60", value:"30/60", metode:["Kas Keras", "HHIT", "BRI"]},
    {perumahanId:"2", name:"Tipe 33/60", value:"33/60", metode:["Kas Keras", "HHIT", "BRI"]},
    {perumahanId:"2", name:"Tipe 32/70", value:"32/70", metode:["Kas Keras", "HHIT", "BRI"]},
    {perumahanId:"3", name:"Cluster Adenium 27/60", value:"27/60A", metode:["Kas Keras", "HHIT", "BRI"]},
    {perumahanId:"3", name:"Cluster Alamanda 24/66", value:"24/66", metode:["Kas Keras", "HHIT", "BRI"]},
    {perumahanId:"3", name:"Cluster Alamanda 24/72", value:"24/72", metode:["Kas Keras", "HHIT", "BRI"]},
    {perumahanId:"3", name:"Cluster Bougenville 33/72", value:"33/72R", metode:["Kas Keras", "HHIT", "BRI"]},
    {perumahanId:"3", name:"Cluster Dahlia 35/72", value:"35/72", metode:["Kas Keras", "HHIT", "BRI"]},
    {perumahanId:"3", name:"Cluster Dahlia 52/72", value:"52/72", metode:["Kas Keras", "HHIT", "BRI"]},
    {perumahanId:"3", name:"Cluster Fuschia 28/60", value:"28/60F", metode:["Kas Keras", "HHIT", "BRI"]},
    {perumahanId:"3", name:"Cluster Gardenia 28/60", value:"28/60G", metode:["Kas Keras", "HHIT", "BRI"]},
    {perumahanId:"3", name:"Cluster Gardenia 30/72", value:"30/72", metode:["Kas Keras", "HHIT", "BRI"]},
    {perumahanId:"3", name:"Cluster Gardenia 36/72", value:"36/72", metode:["Kas Keras", "HHIT", "BRI"]},
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
  const [unit, setUnit] = useState([]);
  const [unitId, setUnitId] = useState();
  const [hargaJual, setHargaJual] = useState();
  const [payment, setPayment] = useState([]);
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
  }

  const handleUnit = (e) => {
    e.target.value === "27/60F" ?
      setHargaJual(220000000) :
      e.target.value === "27/60A" ?
        setHargaJual(220000000) :
      e.target.value === "33/72" ?
      setHargaJual(285000000) :
      e.target.value === "30/60" ?
      setHargaJual(189000000) :
      e.target.value === "33/60" ?
      setHargaJual(189000000) :
      e.target.value === "32/70" ?
      setHargaJual(250000000) :
      e.target.value === "27/60" ?
      setHargaJual(220000000) :
      e.target.value === "24/66" ?
      setHargaJual(305000000) :
      e.target.value === "24/72" ?
      setHargaJual(322000000) :
      e.target.value === "33/72R" ?
      setHargaJual(349000000) :
      e.target.value === "35/72" ?
      setHargaJual(339000000) :
      e.target.value === "52/72" ?
      setHargaJual(449000000) :
      e.target.value === "28/60F" ?
      setHargaJual(168000000) :
      e.target.value === "28/60G" ?
      setHargaJual(168000000) :
      e.target.value === "30/72" ?
      setHargaJual(323000000) :
      e.target.value === "36/72" ?
      setHargaJual(333000000) :
      setHargaJual(0);

      const py = units.filter(x => x.value === e.target.value);
      const xy = py.filter(x => x.perumahanId === unitId);
      setPayment(xy[0].metode);
  };

  const handleCicilan = (id) => {
    const dc = instalment.filter(x => x.paymentsId === id)
    setPilihCicilan(dc)
    setHargaBeli(id === "Kas Keras" ? (hargaJual*(1+(6/100))) / (1 + (6 / 100)) : id === "HHIT" ? (hargaJual*(1+(6/100))) / (1 + (6 / 100)) : id === "BRI" ? (hargaJual*(1+(6/100))) / 1 : 0);
    setTextCicilan(id === "Kas Keras" ? "Kas Keras" : id === "HHIT" ? "HHIT" : id === "BRI" ? "BRI" : "");
    setDp(id === "Kas Keras" ? 5 / 100 : id === "HHIT" ? 33.333333333 / 100 : id === "BRI" ? 1 / 100 : 0);
    setCicilDp(id === "Kas Keras" ? 3 : id === "HHIT" ? 1 : id === "BRI" ? 6 : 0);
    setDiskon(id === "Kas Keras" ? 6 : id === "HHIT" ? 6 : id === "BRI" ? 0 : 0);
    setBunga(id === "Kas Keras" ? 0 : id === "HHIT" ? 6 / 100 : id === "BRI" ? 8.75 / 100 : 0);
    setTc(id === "Kas Keras" ? "Dicicil 1 Tahun" : id === "HHIT" ? "Max 5 Tahun" : id === "BRI" ? "5 Tahun Fix Interest, setelah itu float" : "");
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
    console.log('lamacicilan',lamaCicilan)

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
  }, [payments,lamaCicilan, bunga, dp, hargaBeli,homes, unit])

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
              Tipe Rumah
            </label>
            <div className="col-sm-8">
              <select class="form-select" aria-label="Default select example" onChange={handleUnit}>
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
                      <option key={index} value={p}>{p}</option>
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
                    <span className="text-value-diskon">{diskon}%</span>
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
                  pilihCicilan.map((l, index) => {
                    return(
                      <option key={index} value={l.value}>{l.name}</option>
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