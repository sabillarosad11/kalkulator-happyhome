import React, {useState, useEffect, useMemo} from "react";

const CicilanIdrEng = () => {
    const homes = useMemo(() => [
    {id:"1", name:"The Leaf Mansion"},
    {id:"2", name:"The Leaf Platinum"},
    {id:"3", name:"The Leaf Residence"},
  ],[])

  const units = useMemo(() => [
    {id:"1", perumahanId:"1", name:"Cluster Fuschia 27/60", value:"27/60F", metode:[{id:"1", name:"HHIT"}]},
    {id:"2", perumahanId:"1", name:"Cluster Adenium 27/60", value:"27/60A", metode:[{id:"2", name:"HHIT"}]},
    {id:"3", perumahanId:"1", name:"Cluster Bougenville 33/72", value:"33/72", metode:[{id:"3", name:"HHIT"}]},
    {id:"4", perumahanId:"2", name:"Tipe 30/60", value:"30/60", metode:[{id:"4", name:"Cash"}, {id:"5", name:"HHIT"}, {id:"6", name:"BRI"}]},
    {id:"5", perumahanId:"2", name:"Tipe 33/60", value:"33/60", metode:[{id:"7", name:"Cash"}, {id:"8", name:"HHIT"}, {id:"9", name:"BRI"}]},
    {id:"6", perumahanId:"2", name:"Tipe 32/70", value:"32/70", metode:[{id:"10", name:"Cash"}, {id:"11", name:"HHIT"}, {id:"12", name:"BRI"}]},
    {id:"7", perumahanId:"3", name:"Cluster Adenium 27/60", value:"27/60A", metode:[{id:"13", name:"Cash"}, {id:"14", name:"HHIT"}, {id:"15", name:"BRI"}]},
    {id:"8", perumahanId:"3", name:"Cluster Alamanda 24/66", value:"24/66", metode:[{id:"16", name:"Cash"}, {id:"17", name:"HHIT"}, {id:"18", name:"BRI"}]},
    {id:"9", perumahanId:"3", name:"Cluster Alamanda 24/72", value:"24/72", metode:[{id:"19", name:"Cash"}, {id:"20", name:"HHIT"}, {id:"21", name:"BRI"}]},
    {id:"10", perumahanId:"3", name:"Cluster Bougenville 33/72", value:"33/72R", metode:[{id:"22", name:"Cash"}, {id:"23", name:"HHIT"}, {id:"34", name:"BRI"}]},
    {id:"11", perumahanId:"3", name:"Cluster Dahlia 35/72", value:"35/72", metode:[{id:"25", name:"Cash"}, {id:"26", name:"HHIT"}, {id:"27", name:"BRI"}]},
    {id:"12", perumahanId:"3", name:"Cluster Dahlia 52/72", value:"52/72", metode:[{id:"28", name:"Cash"}, {id:"29", name:"HHIT"}, {id:"30", name:"BRI"}]},
    {id:"13", perumahanId:"3", name:"Cluster Fuschia 28/60", value:"28/60F", metode:[{id:"31", name:"Cash"}, {id:"32", name:"HHIT"}, {id:"33", name:"BRI"}]},
    {id:"14", perumahanId:"3", name:"Cluster Gardenia 28/60", value:"28/60G", metode:[{id:"34", name:"Cash"}, {id:"35", name:"HHIT"}, {id:"36", name:"BRI"}]},
    {id:"15", perumahanId:"3", name:"Cluster Gardenia 30/72", value:"30/72", metode:[{id:"37", name:"Cash"}, {id:"38", name:"HHIT"}, {id:"39", name:"BRI"}]},
    {id:"16", perumahanId:"3", name:"Cluster Gardenia 36/72", value:"36/72", metode:[{id:"40", name:"Cash"}, {id:"41", name:"HHIT"}, {id:"42", name:"BRI"}]},
  ],[])

  const payments = useMemo(() => [{
      id: "1",
      name: "Cash"
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
      paymentsId: "Cash",
      name: "1 Years",
      value: 1
    },
    {
      id: "2",
      paymentsId: "HHIT",
      name: "5 Years",
      value: 5
    },
    {
      id: "3",
      paymentsId: "BRI",
      name: "5 Years",
      value: 5
    },
    {
      id: "4",
      paymentsId: "BRI",
      name: "10 Years",
      value: 10
    },
    {
      id: "5",
      paymentsId: "BRI",
      name: "15 Years",
      value: 15
    },
    {
      id: "6",
      paymentsId: "BRI",
      name: "20 Years",
      value: 20
    },
    {
      id: "7",
      paymentsId: "BRI",
      name: "25 Years",
      value: 25
    },
  ]

  const [perumahan, setPerumahan] = useState([])
  const [unit, setUnit] = useState(null);
  const [tipeUnit, setTipeUnit] = useState(null)
  const [unitId, setUnitId] = useState();
  const [hargaJual, setHargaJual] = useState();
  const [payment, setPayment] = useState(null);
  const [valuePembayaran, setValuePembayaran] = useState(null)
  const [pilihCicilan, setPilihCicilan] = useState(null);
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
    setPayment(null)
    setPilihCicilan(null)
  }

  const handleUnit = (e) => {
    setTipeUnit(e.target.value)
    const py = units.filter(x => x.value === e.target.value && x.perumahanId === unitId);
    console.log('py', py)
    setPayment(py[0].metode);
    // setValuePembayaran(null)
    // setLamaCicilan(null)
      // const xy = py.filter(x => x.perumahanId === unitId);
      // setPayment(xy[0].metode);
      // console.log 
  };

  const handleCicilan = (id) => {
    console.log('id', id)
    setValuePembayaran(id)
    const dc = instalment.filter(x => x.paymentsId === id)
    setPilihCicilan(dc)
    setLamaCicilan(null)
    console.log(id)
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

    setHargaBeli(valuePembayaran === "Cash" ? (hargaJual) * (1 - (6 / 100)) : valuePembayaran === "HHIT" ? (hargaJual) * (1 - (6 / 100)) : valuePembayaran === "BRI" ? (hargaJual) * 1 : 0);
    setTextCicilan(valuePembayaran === "Cash" ? "Cash" : valuePembayaran === "HHIT" ? "HHIT" : valuePembayaran === "BRI" ? "BRI" : "");
    setDp(valuePembayaran === "Cash" ? 5 / 100 : valuePembayaran === "HHIT" ? 33.333333333 / 100 : valuePembayaran === "BRI" ? 1 / 100 : 0);
    setCicilDp(valuePembayaran === "Cash" ? 3 : valuePembayaran === "HHIT" ? 1 : valuePembayaran === "BRI" ? 6 : 0);
    setDiskon(valuePembayaran === "Cash" ? 6 : valuePembayaran === "HHIT" ? 6 : valuePembayaran === "BRI" ? 0 : 0);
    setBunga(valuePembayaran === "Cash" ? 0 : valuePembayaran === "HHIT" ? 6 / 100 : valuePembayaran === "BRI" ? 8.75 / 100 : 0);
    setTc(valuePembayaran === "Cash" ? "1 Year Installment" : valuePembayaran === "HHIT" ? "Max 5 Years" : valuePembayaran === "BRI" ? "5 Year Fix Interest, After that float" : "");

    console.log('lamacicilan',lamaCicilan)
    console.log('payment', payment)
    console.log('value pembayaran', valuePembayaran)

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
        <h1>Installment Calculator</h1>
        <span className="mb-4 text-simulasi">
          Simulate rental installments and mortgage installments easily here.
        </span>
      </div>
      <div className="row row-mb gx-2">
        <div className="col-md-6">
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Residential
            </label>
            <div className="col-sm-8">
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(e) => handlePerumahan(e.target.value)}
              >
                <option selected>Select Residential</option>
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
              House Type
            </label>
            <div className="col-sm-8">
              <select class="form-select" aria-label="Default select example" onChange={handleUnit}>
                <option selected>Select Unit Type</option>
                {
                  unit && unit !== undefined ? 
                  unit.map((u, index) => {
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
              Sales Price
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
              Payment Methode
            </label>
            <div className="col-sm-8">
              <select class="form-select" aria-label="Default select example" onChange={(e) => handleCicilan(e.target.value)}>
                <option selected>Select payment type</option>
                {
                  payment && payment !== undefined ?
                  payment.map((p, index) => {
                    return(
                      <option key={index} value={p.name}>{p.name}</option>
                    )
                  }) : "No Payment"
                }
              </select>
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Purchase Price
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
                    <span className="me-1 text-diskon">Discount</span>
                    <span className="text-value-diskon">{diskon ? diskon : 0}%</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Length of Installment
            </label>
            <div className="col-sm-8">
              <select class="form-select" aria-label="Default select example" onChange={handleLamaCicilan}>
                <option value={0}>
                  Select Installment Period
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
              <p>Installment {textCicilan}</p>
              <p>Total Down Payment</p>
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
              <p>Length of Installment Down Payment</p>
              <p className="text-bold">{lamaCicilan && lamaCicilan !== undefined && lamaCicilan !== 0 ? cicilDp : 0} Times</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Installment Down Payment</p>
              <div className="d-flex">
                <p className="text-bold">
                  Rp {
                    lamaCicilan && lamaCicilan !== undefined ? numberWithCommas(Math.round(handleNan(((dp * hargaBeli) / cicilDp)))) : 0
                  }
                </p>
                <p> /Installment</p>
              </div>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Plafon Installment</p>
              <p className="text-bold">
                Rp {
                  lamaCicilan && lamaCicilan !== undefined ? numberWithCommas(Math.round(handleNan(hargaBeli - (dp * hargaBeli)))) : 0
                }
              </p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Interest Of Installment</p>
              <p className="text-bold">{lamaCicilan && lamaCicilan !== undefined ? handleNan(bunga * 100) : 0}%</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex">
              <p className="text-bold">Information:</p>
              <p className="ms-1">{lamaCicilan && lamaCicilan !== undefined ? tc : ''}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CicilanIdrEng