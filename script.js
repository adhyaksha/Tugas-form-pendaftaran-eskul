let daftarSiswa = []

function TambahData() {
    const nama = document.getElementById('nama').value;
    let kelas = '';
    if (document.getElementById('kelasX').checked) {
        kelas = 'X';
    } else if (document.getElementById('kelasXI').checked) {
        kelas = 'XI';
    } else if (document.getElementById('kelasXII').checked) {
        kelas = 'XII';
    };
    const jurusan = document.getElementById('jurusan').value;
    const ekstrakurikuler = document.getElementById('ekstrakurikuler').value;

    const siswaBaru = {
        id : Date.now(),
        nama : nama,
        kelas : kelas,
        jurusan : jurusan,
        ekstrakurikuler : ekstrakurikuler
    };

    daftarSiswa.push(siswaBaru);

    inputData();
}


function inputData() {
    const isiTable = document.getElementById('isiTable');

    isiTable.innerHTML = '';

    daftarSiswa.forEach((siswa, index) => {
        isiTable.innerHTML +=`
        <tr>
            <td class="text-center">${index + 1}</td>
            <td>${siswa.nama}</td>
            <td class="text-center">${siswa.kelas}</td>
            <td class="text-center">${siswa.jurusan}</td>
            <td class="text-center">${siswa.ekstrakurikuler}</td>
            <td class="tombol-tengah">
            <button class="edit" onclick="editData(${siswa.id})">edit</button>
            <button class="hapus" onclick="hapusData(${siswa.id})">hapus</button>
            </td>
        </tr>
    `;
        });
};

function editData(id) {
    let siswa;
    for (let index = 0; index < daftarSiswa.length; index++) {
        if (daftarSiswa[index].id === id) {
            siswa = daftarSiswa[index];
        }
        
    }
    document.getElementById('nama').value;
    document.getElementById('kelas' + siswa.kelas).checked = true;
    document.getElementById('jurusan').value;
    document.getElementById('ekstrakurikuler').value;

}

function hapusData(id) {
    daftarSiswa = daftarSiswa.filter(siswa => siswa.id !== id);
    inputData();
}


