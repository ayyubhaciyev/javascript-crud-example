let isciler = {
  AdSoyad: ["Murad Hacıyev", "Leyla Tahirli", "Kamil Malikli"],
  Vezife: ["Mobil Developer", "C Developer", "SMM"],
  Maas: [2500, 6000, 350],
};


onload = function(){
    Table();
}


function Table() {
  let tbl = `
        <tr>
            <td>S/N</td>
            <td>Ad Soyad</td>
            <td>Vəzifə</td>
            <td>Maaş</td>
            <td>Əməliyyatlar</td>
        </tr>
    `;
  for (let i = 0; i < isciler.AdSoyad.length; i++) {
    tbl += `
        <tr>
            <td>${i+1}</td>
            <td>${isciler.AdSoyad[i]}</td>
            <td>${isciler.Vezife[i]}</td>
            <td>${isciler.Maas[i]} AZN</td>
            <td>
            <button onclick="EditView(${i})" data-toggle="modal" data-target="#edit" class="btn btn-outline-warning btn-sm">Redaktə Et</button>
            <button onclick="Delete(${i})"  class="btn btn-outline-danger btn-sm">Sil</button>
            </td>
        </tr>
    `;
  }

  document.getElementsByClassName("table")[0].innerHTML = tbl;
}


function Add(){
    let AdSoyad = document.getElementById("AdSoyad");
    let Vezife = document.getElementById("Vezife");
    let Maas = document.getElementById("Maas");

    if(AdSoyad.value !== "" &&  Vezife.value !== ""  && Maas.value !== "" ){
        isciler.AdSoyad.push(AdSoyad.value);
        isciler.Vezife.push(Vezife.value);
        isciler.Maas.push(Maas.value);
        AdSoyad.value = "";
        Vezife.value = "";
        Maas.value = "";
        Table();
    }
}

function EditView(i){
      document.getElementById("EditAdSoyad").value = isciler.AdSoyad[i];
      document.getElementById("EditVezife").value = isciler.Vezife[i];
      document.getElementById("EditMaas").value = isciler.Maas[i];
      document.getElementById("id").value = i;
}

function Edit(){
  let i = document.getElementById("id").value;
  isciler.AdSoyad[i] = document.getElementById("EditAdSoyad").value;
  isciler.Vezife[i] = document.getElementById("EditVezife").value;
  isciler.Maas[i] = document.getElementById("EditMaas").value;
  Table();
}

function Delete(i){
  swal({
    title: "Əminsinizmi?",
    text: "Silinən informasiyalar geri qaytarılmır!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    buttons: ["Xeyr!", "Bəli!"],
  })
  .then((willDelete) => {
    if (willDelete) {
      isciler.AdSoyad.splice(i, 1);
      isciler.Vezife.splice(i, 1);
      isciler.Maas.splice(i, 1);
      Table();
      swal("Əməliyyat uğurla icra edildi!");
    } else {
      swal("Əməliyyat imtina edildi!");
    }
  });
}