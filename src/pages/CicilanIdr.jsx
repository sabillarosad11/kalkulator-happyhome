import React, {useState} from 'react'
import convertRupiah from "rupiah-format";

const CicilanIdr = () => {

  const [jumlah, setJumlah] = useState(1);

  const handlePlus = () => {
    setJumlah(jumlah + 1);
  };

  const handleMinus = () => {
    if (jumlah > 0) {
      setJumlah(jumlah - 1);
    }
  };

  return (
    <div className="container-md p-5">
      <div className="mb-4">
        <h1>Kalkulator Investasi</h1>
        <span className="mb-4">
          Simulasikan cicilan sewa dan cicilan KPR dengan mudah disini
        </span>
      </div>
      <div className="row row-mb">
        <div className="col-sm-6">
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Tipe Rumah
            </label>
            <div className="col-sm-8">
              <select class="form-select" aria-label="Default select example">
                <option selected>Pilih Tipe Unit</option>
                <option value="24">24/66</option>
                <option value="27">27/60</option>
                <option value="33">33/72</option>
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
                value={convertRupiah.convert(200000000)}
                disabled
              />
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Tipe Pembayaran
            </label>
            <div className="col-sm-8">
              <select class="form-select" aria-label="Default select example">
                <option selected>Pilih Opsi Cicilan</option>
                <option value="6 Bulan">6 Bulan</option>
                <option value="12 Bulan">12 Bulan</option>
                <option value="24 Bulan">24 Bulan</option>
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
                    value={convertRupiah.convert(176000000)}
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
              <select class="form-select" aria-label="Default select example">
                <option selected>Pilih Periode</option>
                <option value="6 Bulan">10 Tahun</option>
                <option value="12 Bulan">15 Tahun</option>
                <option value="24 Bulan">20 Tahun</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card card-detail">
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Harga Jual</p>
              <p className="text-bold">Rp 200,000,000</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Diskon</p>
              <p className="text-bold">5.88%</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Harga Beli</p>
              <p className="text-bold">Rp 176,000,000</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>DP</p>
              <p className="text-bold">Rp 58,666,667</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Pelunasan HappyHomes</p>
              <p className="text-bold">Rp 117,000,000</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex flex-column align-items-center text-bold">
              <p>Keuntungan Penjualan</p>
              <p className="price-column">Rp 24,000,000</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between mb-4 text-bold">
              <div className="text-wrapper d-flex flex-column align-items-center">
                <p>Keuntungan HHIT</p>
                <p className="price-column">Rp 16,000,000</p>
              </div>
              <div className="text-wrapper d-flex flex-column align-items-center">
                <p>Keuntungan</p>
                <p className="price-column">Investmen Buyer</p>
                <p className="price-column">Rp 8,000,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CicilanIdr