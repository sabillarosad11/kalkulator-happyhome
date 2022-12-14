import React, {useState} from 'react'

const InvestasiUsd = () => {
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
      </div>
      <div className="row row-mb">
        <div className="col-sm-6">
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Tipe Unit
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
              Harga Jual
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control grey"
                id="inputPassword"
                value={2000}
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
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control grey"
                    id="inputPassword"
                    value={1760}
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
              <select class="form-select" aria-label="Default select example">
                <option selected>Pilih Periode</option>
                <option value="6 Bulan">6 Bulan</option>
                <option value="12 Bulan">12 Bulan</option>
                <option value="24 Bulan">24 Bulan</option>
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
                value=""
                id="flexCheckChecked"
                checked
                disabled
              ></input>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="card card-detail">
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Harga Jual</p>
              <p className="text-bold">$ 200</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Diskon</p>
              <p className="text-bold">5.88%</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Harga Beli</p>
              <p className="text-bold">$ 176</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>DP</p>
              <p className="text-bold">$ 5,800</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Pelunasan HappyHomes</p>
              <p className="text-bold">$ 1,170</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex flex-column align-items-center text-bold">
              <p>Keuntungan Penjualan</p>
              <p className="price-column">$ 2,400</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between mb-4 text-bold">
              <div className="text-wrapper d-flex flex-column align-items-center">
                <p>Keuntungan HHIT</p>
                <p className="price-column">$160</p>
              </div>
              <div className="text-wrapper d-flex flex-column align-items-center">
                <p>Keuntungan</p>
                <p className="price-column">Investmen Buyer</p>
                <p className="price-column">$ 800</p>
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
                <td className="pink text-bold">$ 1,360</td>
                <td>17</td>
              </tr>
              <tr className="border-row">
                <td>2</td>
                <td className="pink text-bold">$ 1,680</td>
                <td>21</td>
              </tr>
              <tr className="border-row">
                <td>3</td>
                <td className="pink text-bold">$ 2,160</td>
                <td>27</td>
              </tr>
              <tr className="border-row">
                <td>4</td>
                <td className="pink text-bold">$ 2,800</td>
                <td>35</td>
              </tr>
              <tr className="border-radius">
                <td>5</td>
                <td className="pink text-bold">$ 3,600</td>
                <td>45</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="card card-keuntungan">
            <div className="text-total">Total Keuntungan</div>
            <div className="d-flex align-items-end">
              <span className="text-rp">$</span>
              <span className="text-price">1,000</span>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Investasi Awal</p>
              <p className="text-bold">$ 4,690</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>% Keuntungan</p>
              <p className="text-bold">247.15%</p>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>APY</p>
              <p className="text-bold">247.15%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestasiUsd