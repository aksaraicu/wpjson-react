import React, { useEffect, useState } from "react";
import axios from "axios";
import { ExternalLink } from "react-external-link";
import CurrencyFormat from "react-currency-format";

const ArchiveAset = () => {
  const [asets, setAsets] = useState([]);
  // const [loading, setLoading] = useState(false);

  const getAsets = async () => {
    try {
      // setLoading(true)
      const response = await axios.get(
        "https://ruangaset.com/wp-json/wp/v2/aset"
      );
      // setLoading(false)
      setAsets(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getAsets();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tipe aset</th>
                <th>Name</th>
                <th>Luas tanah</th>
                <th>Luas bangunan</th>
                <th>Sertifikasi</th>
                <th>Kamar tidur</th>
                <th>Kamar mandi</th>
                <th>Lokasi</th>
                <th>Fasilitas</th>
                <th>Alamat</th>
                <th>Harga</th>
                <th>Gambar</th>
                <th>Link kontak</th>
              </tr>
            </thead>
            <tbody>
              {asets.map((aset, index) => {
                return (
                  <tr key={index}>
                    <th>{aset.id}</th>
                    <td>{aset.tipe_aset[0].name}</td>
                    <td>{aset.title.rendered}</td>
                    <td>{aset.luas_tanah}m²</td>
                    <td>{aset.luas_bangunan}m²</td>
                    <td>{aset.sertifikasi}</td>
                    <td>{aset.kamar_tidur}</td>
                    <td>{aset.kamar_mandi}</td>
                    <td>{aset.lokasi_aset[0].name}</td>
                    <td>
                      {aset.fasilitas.map((txt, id) => (
                        <span className="badge mx-1" key={id}>
                          {txt}
                        </span>
                      ))}
                    </td>
                    <td>{aset.alamat}</td>
                    <td>
                      <CurrencyFormat
                        value={aset.harga}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        prefix={"Rp"}
                        renderText={(value) => <div>{value}</div>}
                      ></CurrencyFormat>
                    </td>
                    <td>
                      <ExternalLink
                        href={aset.gambar_aset.guid}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={aset.gambar_aset.guid}
                          alt={aset.gambar_aset.post_title.toString()}
                        />
                      </ExternalLink>
                      {/* <a href={aset.gambar_aset.guid}>test</a> */}
                    </td>
                    <td>
                      <ExternalLink
                        href={aset.link_kontak}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-active"
                      >
                        Kontak
                      </ExternalLink>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ArchiveAset;
