import React from 'react'

const InvestasiIdr = () => {
  return (
    <div className="container p-5">
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
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Harga Jual
            </label>
            <div className="col-sm-8">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
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
                    type="password"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
                <div className="col-sm-4">
                  <label for="inputPassword" className="col-form-label label-diskon">
                    <span className="me-2 text-diskon">Diskon</span>
                    <span className='text-value-diskon'>20%</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Unit Dibeli
            </label>
            <div className="col-sm-8">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Lama Investasi
            </label>
            <div className="col-sm-8">
              <select class="form-select" aria-label="Default select example">
                <option selected>Pilih Tipe Unit</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="input-group row">
            <label for="inputPassword" className="col-sm-4 col-form-label">
              Auto Reinvest
            </label>
            <div className="col-sm-8">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
              />
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
      <div className="row row-mb">
        <div className="col-sm-12 col-md-6">
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
                <td className="pink text-bold">Rp 136,000,000</td>
                <td>17</td>
              </tr>
              <tr className="border-row">
                <td>2</td>
                <td className="pink text-bold">Rp 168,000,000</td>
                <td>21</td>
              </tr>
              <tr className="border-row">
                <td>3</td>
                <td className="pink text-bold">Rp 216,000,000</td>
                <td>27</td>
              </tr>
              <tr className="border-row">
                <td>4</td>
                <td className="pink text-bold">Rp 280,000,000</td>
                <td>35</td>
              </tr>
              <tr className="border-radius">
                <td>5</td>
                <td className="pink text-bold">Rp 360,000,000</td>
                <td>45</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="card card-keuntungan">
            <div className="text-total">Total Keuntungan</div>
            <div className="d-flex align-items-end">
              <span className="text-rp">Rp</span>
              <span className="text-price">100,000,000</span>
            </div>
            <hr />
            <div className="text-wrapper d-flex justify-content-between">
              <p>Investasi Awal</p>
              <p className="text-bold">Rp 469,333,333</p>
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

export default InvestasiIdr