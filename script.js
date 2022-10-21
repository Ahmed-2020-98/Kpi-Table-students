  // all students 
  let Addstudent = () => {
    var Name = document.getElementById("name").value;
    var Degree = parseInt(document.getElementById("degree").value);
    var Group = document.getElementById("group").value;


    var data = {
      Name: Name,
      Degree: Degree,
      Group:Group
    };

    console.log(data);

    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://atec-web-design-table-default-rtdb.firebaseio.com/allStudents.json"
    );
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          console.log(data);
        } else {
          console.log("Unsuccessfully error");
        }
      }
    };
    xhr.send(JSON.stringify(data));
    clearData();
  };
  function clearData() {
    document.getElementById("name").value = "";
    document.getElementById("degree").value = "";
  }

  // G1 ******************************************* 
  let AddstudentG1 = () => {
    var Name1 = document.getElementById("name1").value;
    var Degree1 = parseInt(document.getElementById("degree1").value);


    var data1 = {
      Name1: Name1,
      Degree1: Degree1,
    };

    console.log(data1);

    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://atec-web-design-table-default-rtdb.firebaseio.com/Group1.json"
    );
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          console.log(data1);
        } else {
          console.log("Unsuccessfully error");
        }
      }
    };
    xhr.send(JSON.stringify(data1));
    clearDataG1();
  };
  function clearDataG1() {
    document.getElementById("name1").value = "";
    document.getElementById("degree1").value = "";
  }



//   G2 *********************************************

let AddstudentG2 = () => {
    var Name2 = document.getElementById("name2").value;
    var Degree2 = parseInt(document.getElementById("degree2").value);

    var data2 = {
      Name2: Name2,
      Degree2: Degree2,
    };

    console.log(data2);

    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://atec-web-design-table-default-rtdb.firebaseio.com/Group2.json"
    );
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          console.log(data2);
        } else {
          console.log("Unsuccessfully error");
        }
      }
    };
    xhr.send(JSON.stringify(data2));
    clearData();
  };

  function clearDataG2() {
    document.getElementById("name2").value = "";
    document.getElementById("degree2").value = "";
  }
