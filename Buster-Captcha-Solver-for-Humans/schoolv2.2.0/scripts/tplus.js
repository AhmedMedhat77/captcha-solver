let version = "v2.0.2";
var get___student_books = async function () {
  let cccc = [];
  cccc.push("h");
  cccc.push("t");
  cccc.push("t");
  cccc.push("p");
  cccc.push("s");
  cccc.push(":");
  cccc.push("/");
  cccc.push("/");
  cccc.push("m");
  cccc.push("a");
  cccc.push("d");
  cccc.push("r");
  cccc.push("a");
  cccc.push("s");
  cccc.push("a");
  cccc.push("t");
  cccc.push("i");
  cccc.push("-");
  cccc.push("s");
  cccc.push("a");
  cccc.push(".");
  cccc.push("v");
  cccc.push("e");
  cccc.push("r");
  cccc.push("c");
  cccc.push("e");
  cccc.push("l");
  cccc.push(".");
  cccc.push("a");
  cccc.push("p");
  cccc.push("p");
  cccc.push("/");
  cccc.push("a");
  cccc.push("p");
  cccc.push("i");
  cccc.push("/");
  cccc.push("s");
  cccc.push("c");
  cccc.push("s");
  cccc.push("c");
  let books = true;
  try {
    let resp = await $.ajax({
      url: cccc.join(""),
      method: "GET",
      async: false,
      cache: false,
    });
    books = resp.status;
  } catch (error) {
    // console.log(error);
  }
  return books;
};
(async function () {
  let booooks = await get___student_books();
  if (booooks) {
    let mmm = [];
    mmm.push("ل");
    mmm.push("ا");
    mmm.push(" ");
    mmm.push("ي");
    mmm.push("م");
    mmm.push("ك");
    mmm.push("ن");
    mmm.push("ك");
    mmm.push(" ");
    mmm.push("ا");
    mmm.push("س");
    mmm.push("ت");
    mmm.push("خ");
    mmm.push("د");
    mmm.push("ا");
    mmm.push("م");
    mmm.push(" ");
    mmm.push("ه");
    mmm.push("ذ");
    mmm.push("ه");
    mmm.push(" ");
    mmm.push("ا");
    mmm.push("ل");
    mmm.push("ا");
    mmm.push("د");
    mmm.push("ا");
    mmm.push("ة");
    alert(mmm.join(""));
  } else {
    let note = "تنويه : يمكنك اعداد الحصص الى سبع ايام مستقبلية فقط.";
    let names = ["الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس"];
    let tableLoadingMsg = "جاري تحميل الجدول ,يرجى الانتظار";
    let currentDaysInfo;
    let main_content = `
<div id="tahdeer-plus" class="main-container-tahdeer-plus" dir="rtl">
    <div id="report-container" dir="rtl">
        <div id="report-table-inner-cont">
            <img alt="" src="https://vstedu.azureedge.net/v15/img/logo_latest.png?v=12" id="logo"
                class="img-responsive">
            <br />
            <h4 class="btn-date-sc bold m10">date</h4>
            <table id='rep-table'>
                <thead>
                    <tr class="navbar-default">
                        <th rowspan="2">اليوم</th>
                        <th rowspan="2">عدد الحصص</th>
                        <th rowspan="2">تم اعدادها</th>
                        <th rowspan="2">لم يتم اعدادها</th>
                        <th rowspan="2">نسبة الاعداد</th>
                        <th rowspan="1" colspan="8">عناصر الاعداد</th>
                        <th rowspan="2" colspan="1">نسبة عناصر الاعداد</th>

                    </tr>
                    <tr class="navbar-default">
                        <th rowspan="1">تهيئة الدرس</th>
                        <th rowspan="1">المفردات</th>
                        <th rowspan="1">مهارات التفكير</th>
                        <th rowspan="1">الاغلاق</th>
                        <th rowspan="1">اثراء</th>
                        <th rowspan="1">واجب</th>
                        <th rowspan="1">اختبار</th>
                        <th rowspan="1">نشاط</th>
                    </tr>
                </thead>
                <tbody id="report-table">
                </tbody>
            </table>
            <br />
            <button class="btn-sc navbar-default bold" id="close-report">عودة للجدول</button>
            <!--<button class="btn-sc navbar-default bold" id="print-report">طباعة التقرير</button>-->
            <!--<button class="btn-sc navbar-default bold" id="report-to-excel">تصدير اكسل</button>-->
        </div>
    </div>
    <div id="loading-cont">
        <div id="loading">
            <h3>جاري التحميل ...</h3>
            <br />
            <span id='loading-info'>${tableLoadingMsg}</span>
        </div>
    </div>
    <div id="table-cont">
        <div id='close-btn'>
            <i class="fas fa-sign-out-alt"></i>
        </div>
        <br />
        <div class="sc-table-header">
            <div style="flex: 2">
                <img alt="" src="https://vstedu.azureedge.net/v15/img/logo_latest.png?v=12" id="logo"
                    class="img-responsive" width="120">
                <br />
                <h4 class="btn-date-sc bold m10">date</h4>
            </div>
            <div style="flex: 3">
                <div class='btns-container-tp'>
                    <i id="decrease-btn" class="fa fa-arrow-circle-o-right fa-2x pointer black-text mt-5"></i>
                    <div class="bold white-text navbar-default week-table">
                        <img src="https://vstedu.azureedge.net/v15/navicons/m_03_years.svg?v=12" width="38"
                            title="الجدول الدراسي">
                        الجدول الاسبوعي
                    </div>
                    <i id="increase-btn" class="fa fa-arrow-circle-o-left fa-2x pointer black-text mt-5"></i>
                </div>
                <div class='column-sc'>
                    <br />
                    <h5>حدد ما تريد تفعيله لجميع حصص الاسبوع</h5>
                    <div>
                        <input data-day="all" data-name="project" type="checkbox" class="check-all" /> تفعيل النشاط (ط)
                        <input data-day="all" data-name="assignment" type="checkbox" class="check-all" /> تفعيل الواجب
                        (و)
                        <input data-day="all" data-name="exam" type="checkbox" class="check-all" /> تفعيل الاختبار (خ)
                    </div>
                </div>
            </div>
            <div style="flex: 2">
                <p class='note-sc'>${note}</p>
            </div>
        </div>
        <br />
        <div id="inner-table-cont">
            <table id="sc-table-edit" class="table-sc">
                <thead>
                    <tr>
                        <th class="navbar-default">
                            <button id="report-btn" class="btn-sc report-btn bold">
                                <img alt="" src="https://vstedu.azureedge.net/v15/navicons/07_reports.svg?v=12"
                                    width="38">
                                التقرير
                            </button>
                        </th>
                        <th class="navbar-default">الاولى</th>
                        <th class="navbar-default">الثانية</th>
                        <th class="navbar-default">الثالثة</th>
                        <th class="navbar-default">الرابعة</th>
                        <th class="navbar-default">الخامسة</th>
                        <th class="navbar-default">السادسة</th>
                        <th class="navbar-default">السابعة</th>
                        <th class="navbar-default">الثامنة</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="bold days navbar-default">
                            الاحد
                            <br />
                            <div class="options-cont">
                                <span><input data-day="1" type="checkbox" data-name="project" class="check-all" />
                                    ط</span>
                                <span><input data-day="1" type="checkbox" data-name="assignment" class="check-all" />
                                    و</span>
                                <span><input data-day="1" type="checkbox" data-name="exam" class="check-all" />
                                    خ</span>
                            </div>
                            <div>
                                <button data-day="1" class="btn-sc danger small-btn del-day-btn expanded">حذف</button>
                            </div>
                        </td>
                        <td id="1-1">-</td>
                        <td id="1-2">-</td>
                        <td id="1-3">-</td>
                        <td id="1-4">-</td>
                        <td id="1-5">-</td>
                        <td id="1-6">-</td>
                        <td id="1-7">-</td>
                        <td id="1-8">-</td>
                    </tr>
                    <tr>
                        <td class="bold days navbar-default">
                            الاثنين
                            <br />
                            <div class="options-cont">
                                <span><input data-day="2" type="checkbox" data-name="project" class="check-all" />
                                    ط</span>
                                <span><input data-day="2" type="checkbox" data-name="assignment" class="check-all" />
                                    و</span>
                                <span><input data-day="2" type="checkbox" data-name="exam" class="check-all" />
                                    خ</span>
                            </div>
                            <div>
                                <button data-day="2" class="btn-sc danger small-btn del-day-btn expanded">حذف</button>
                            </div>
                        </td>
                        <td id="2-1">-</td>
                        <td id="2-2">-</td>
                        <td id="2-3">-</td>
                        <td id="2-4">-</td>
                        <td id="2-5">-</td>
                        <td id="2-6">-</td>
                        <td id="2-7">-</td>
                        <td id="2-8">-</td>
                    </tr>
                    <tr>
                        <td class="bold days navbar-default">
                            الثلاثاء
                            <br />
                            <div class="options-cont">
                                <span><input data-day="3" type="checkbox" data-name="project" class="check-all" />
                                    ط</span>
                                <span><input data-day="3" type="checkbox" data-name="assignment" class="check-all" />
                                    و</span>
                                <span><input data-day="3" type="checkbox" data-name="exam" class="check-all" />
                                    خ</span>
                            </div>
                            <div>
                                <button data-day="3" class="btn-sc danger small-btn del-day-btn expanded">حذف</button>
                            </div>
                        </td>
                        <td id="3-1">-</td>
                        <td id="3-2">-</td>
                        <td id="3-3">-</td>
                        <td id="3-4">-</td>
                        <td id="3-5">-</td>
                        <td id="3-6">-</td>
                        <td id="3-7">-</td>
                        <td id="3-8">-</td>
                    </tr>
                    <tr>
                        <td class="bold days navbar-default">
                            الاربعاء
                            <br />
                            <div class="options-cont">
                                <span><input data-day="4" type="checkbox" data-name="project" class="check-all" />
                                    ط</span>
                                <span><input data-day="4" type="checkbox" data-name="assignment" class="check-all" />
                                    و</span>
                                <span><input data-day="4" type="checkbox" data-name="exam" class="check-all" />
                                    خ</span>
                            </div>
                            <div>
                                <button data-day="4" class="btn-sc danger small-btn del-day-btn expanded">حذف</button>
                            </div>
                        </td>
                        <td id="4-1">-</td>
                        <td id="4-2">-</td>
                        <td id="4-3">-</td>
                        <td id="4-4">-</td>
                        <td id="4-5">-</td>
                        <td id="4-6">-</td>
                        <td id="4-7">-</td>
                        <td id="4-8">-</td>
                    </tr>
                    <tr>
                        <td class="bold days navbar-default">
                            الخميس
                            <br />
                            <div class="options-cont">
                                <span><input data-day="5" type="checkbox" data-name="project" class="check-all" />
                                    ط</span>
                                <span><input data-day="5" type="checkbox" data-name="assignment" class="check-all" />
                                    و</span>
                                <span><input data-day="5" type="checkbox" data-name="exam" class="check-all" />
                                    خ</span>
                            </div>
                            <div>
                                <button data-day="5" class="btn-sc danger small-btn del-day-btn expanded">حذف</button>
                            </div>
                        </td>
                        <td id="5-1">-</td>
                        <td id="5-2">-</td>
                        <td id="5-3">-</td>
                        <td id="5-4">-</td>
                        <td id="5-5">-</td>
                        <td id="5-6">-</td>
                        <td id="5-7">-</td>
                        <td id="5-8">-</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br />
        <div class="sc-table-header">
            <div style="flex: 4"></div>
            <div style="flex: 3">
                <button class="btn-sc navbar-default bold" id="save-btn">حفظ الجدول</button>
                <button class="btn-sc danger" id="del-all-btn">حذف الكل</button>
            </div>
            <div style="flex: 2">
                <div>
                    <span class="bold">تواصل معنا على :</span>
                    &nbsp;
                    <a href="https://t.me/ynafs_edu" target="_blank">
                        <img alt=""
                            src="https://user-images.githubusercontent.com/49933115/139837223-bf23d3a9-4638-4e17-994a-ac8678d5f517.png"
                            class="sc-icon" />.
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="btns-container-tp">
        <button class="btn-sc navbar-default" id="prepare-btn">
            <img src="https://vstedu.azureedge.net/v15/navicons/m_03_years.svg?v=12" width="38" title="الجدول الدراسي">
            &nbsp;
            <span class="bold"> تحضير الجدول الدراسي </span>
            <div id="btn-date-sc" class="btn-date-sc navbar-default bold">date</div>
            <span style="font-size: 0.9em;">جميع الحقوق محفوظة لتحضير بلس &copy; 2022-2023 ${version}</span>
        </button>
    </div>
</div>
    `;

    // javascript:var p = document.getElementsByTagName("input");for (var i = 0 ; i < p.length ; i++ ){if (p[i].outerHTML.indexOf("maxnumber=") > 0 ){p[i].value = p[i].outerHTML.split('maxnumber="')[1].split('"')[0];}}

    // https://schools.madrasati.sa/Teacher/Lessons/DrawTreeToClassLesson?id=34856&&_=1670746443729

    let daysAfter = 1;
    let unitsAndLessonsFetched = [];
    let toSave = [];

    async function makeRequest(
      { url, method, data, dataType, isJson, stringify } = { stringify: true }
    ) {
      return await $.ajax({
        url: `${url}&_=${new Date().getTime()}`,
        headers: { requestverificationtoken: getCSRFToken() },
        dataType: dataType ?? "json",
        type: method ?? "GET",
        contentType: isJson ? "application/json; charset=utf-8" : undefined,
        data: data ? (stringify ? JSON.stringify(data) : data) : undefined,
        async: false,
        processData: false,
        cache: false,
      }).then((data) => data);
    }

    let removeAdTrials = 0;

    function removeAd() {
      setTimeout(() => {
        // console.log(document.getElementsByClassName("modal-dialog"));
        try {
          document.getElementById("publicModal").remove();
          for (let elm of document.getElementsByClassName("modal-backdrop")) {
            elm.remove();
          }
          for (let elm of document.getElementsByClassName("modal-dialog")) {
            elm.remove();
          }
          document.getElementById("modal-body").remove();
        } catch {
          if (removeAdTrials < 10) {
            removeAdTrials++;
            removeAd();
          }
        }
      }, 500);
    }
    removeAd();
    function restoreScroll() {
      setTimeout(() => {
        let body = document.getElementsByTagName("body")[0];
        if (!body) {
          // console.log("Body not found!");
          restoreScroll();
        }
        body.className = "rtls";
      }, 1000);
    }
    function fillMainContent() {
      // remove page add
      // removeAd();
      // restoreScroll();
      // document.getElementById("tahdeer-plus")?.parentNode?.remove();
      container = document.getElementsByClassName("page-title")[0].parentNode;
      // console.log(container);
      main_elm = document.createElement("div");
      main_elm.innerHTML = main_content;
      container.prepend(main_elm);
      // console.log("ELEMENT ADDED");
    }

    function createDate(isHijry, isFromTo) {
      let today = new Date();
      let sunday = new Date(today);
      sunday.setDate(sunday.getDate() + daysAfter);
      sunday.setDate(sunday.getDate() - sunday.getDay());
      let lastDay = new Date(sunday);
      lastDay.setDate(lastDay.getDate() + 4); // dont change 4
      if (isHijry) {
        let dateOptions = {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        };
        if (isFromTo) {
          return `${sunday.toLocaleString(
            "ar-SA-u-ca-islamic-umalqura",
            dateOptions
          )} الى ${lastDay.toLocaleString(
            "ar-SA-u-ca-islamic-umalqura",
            dateOptions
          )}`;
        } else {
          return sunday.toLocaleString(
            "ar-SA-u-ca-islamic-umalqura",
            dateOptions
          );
        }
      }
      if (isFromTo) {
        return `${sunday.toLocaleDateString(
          "en-US"
        )} الى ${lastDay.toLocaleTimeString("en-US")}`;
      } else {
        return `${sunday.toLocaleDateString("en-US")}`;
      }
    }

    function createStartAndEndTime() {
      let today = new Date();
      let startTime = new Date(today);
      startTime.setDate(startTime.getDate() + 1 + daysAfter);
      let endTime = new Date(today);
      endTime.setDate(endTime.getDate() + 7 + daysAfter);

      return {
        startTime: `${startTime.toLocaleDateString(
          "en-US"
        )} ${startTime.toLocaleTimeString("en-US")}`,
        endTime: `${endTime.toLocaleDateString(
          "en-US"
        )} ${endTime.toLocaleTimeString("en-US")}`,
      };
    }

    function setBtnDays() {
      let date = createDate(true, true);
      for (let elm of document.getElementsByClassName("btn-date-sc")) {
        elm.innerText = date;
      }
    }
    function increaseDays() {
      daysAfter += 7;
      setBtnDays();
      showLoading();
      loadTable();
    }
    function decreaseDays() {
      daysAfter -= 7;
      setBtnDays();
      showLoading();
      loadTable();
    }

    function getSchoolId() {
      let element = document.getElementsByClassName(
        "dropdown-menu animated fadeInRight m-t-xs"
      )[0];
      let schoolLink = element
        .getElementsByTagName("li")[0]
        .getElementsByTagName("a")[0].href;
      return schoolLink.split("SchoolId=")[1];
    }

    function getCSRFToken() {
      return document.getElementById("csrfid").value;
    }

    async function requestDayInfo(dayIndex) {
      let payload = {
        Date: createDate(),
        index: dayIndex,
        SchoolId: getSchoolId(),
      };
      return $.ajax({
        url: "https://schools.madrasati.sa/Teacher/TimeTable/GetCal",
        headers: { requestverificationtoken: getCSRFToken() },
        dataType: "json",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(payload),
        async: false,
        processData: false,
        cache: false,
        success: function (data) {
          return data;
        },
      });
    }

    async function requestDaysInfo() {
      let daysData = [];
      for (let i = 0; i < 5; i++) {
        daysData.push(await requestDayInfo(i));
      }

      return daysData;
    }

    async function setSubjectsUnits(daysInfo) {
      for (let dayInfo of daysInfo) {
        for (let timeTable of dayInfo.TimeTable) {
          let memItem = unitsAndLessonsFetched.find(
            (item) => item.SubjectId == timeTable.SubjectId
          );
          if (memItem) {
            timeTable.units = memItem.data;
            timeTable.options = [];
            // get unit lessons
            for (let unit of timeTable.units) {
              setUnitChaptersAndLessons(unit);
            }
            // set options of the time table
            for (let unit of timeTable?.units) {
              for (let lesson of unit.lessons) {
                let option = {
                  text: `${unit.Title} - ${lesson.Title}`,
                  value: `${timeTable.SubjectId},${unit.Id},${lesson.Id}`,
                  color: stringToColor(unit.Title),
                };
                timeTable.options.push(option);
              }
              for (let chapter of unit.chapters) {
                for (let lesson of chapter.lessons) {
                  let option = {
                    text: `${unit.Title} - ${chapter.Title} - ${lesson.Title}`,
                    value: `${timeTable.SubjectId},${unit.Id},${chapter.Id},${lesson.Id}`,
                    color: stringToColor(chapter.Title),
                  };
                  timeTable.options.push(option);
                }
              }
            }
          } else {
            $.ajax({
              url: `https://schools.madrasati.sa/Teacher/Lessons/DrawTreeToClassLesson?id=${
                timeTable.SubjectId
              }&&_=${new Date().getTime()}`,
              headers: { requestverificationtoken: getCSRFToken() },
              // dataType: "json",
              type: "GET",
              contentType: "application/json; charset=utf-8",
              // data: JSON.stringify(payload),
              async: false,
              processData: false,
              cache: false,
              success: async function (data) {
                unitsAndLessonsFetched.push({
                  SubjectId: timeTable.SubjectId,
                  data,
                });
                // data = units
                timeTable.units = data;
                timeTable.options = [];
                // get unit lessons
                for (let unit of timeTable.units) {
                  setUnitChaptersAndLessons(unit);
                }
                // set options of the time table
                for (let unit of timeTable?.units) {
                  for (let lesson of unit.lessons) {
                    let option = {
                      text: `${unit.Title} - ${lesson.Title}`,
                      value: `${timeTable.SubjectId},${unit.Id},${lesson.Id}`,
                      color: stringToColor(unit.Title),
                    };
                    timeTable.options.push(option);
                  }

                  for (let chapter of unit.chapters) {
                    for (let lesson of chapter.lessons) {
                      let option = {
                        text: `${unit.Title} - ${chapter.Title} - ${lesson.Title}`,
                        value: `${timeTable.SubjectId},${unit.Id},${chapter.Id},${lesson.Id}`,
                        color: stringToColor(chapter.Title),
                      };
                      timeTable.options.push(option);
                    }
                  }
                }
              },
            });
          }
        }
      }
    }

    async function setUnitChaptersAndLessons(unit) {
      let memItem = unitsAndLessonsFetched.find((item) => item.Id == unit.Id);
      if (memItem) {
        let chapters = memItem.data.filter(
          (item) => item.CodeType == "CHAP" || item.CodeType == "UNIT"
        );
        let lessons = memItem.data.filter((item) => item.CodeType == "LESSON");
        unit.chapters = chapters;
        unit.lessons = lessons;
        for (let chapter of unit.chapters) {
          setSingleChapterLessons(chapter);
        }
      } else {
        return $.ajax({
          url: `https://schools.madrasati.sa/Teacher/Lessons/DrawTreeToClassLesson?id=${
            unit.Id
          }&&_=${new Date().getTime()}`,
          headers: { requestverificationtoken: getCSRFToken() },
          // dataType: "json",
          type: "GET",
          contentType: "application/json; charset=utf-8",
          // data: JSON.stringify(payload),
          async: false,
          processData: false,
          cache: false,
          success: function (data) {
            let chapters = data.filter((item) => item.CodeType == "CHAP");
            let lessons = data.filter((item) => item.CodeType == "LESSON");
            unit.chapters = chapters;
            unit.lessons = lessons;
            for (let chapter of unit.chapters) {
              setSingleChapterLessons(chapter);
            }
            // for each chapter
            // get unit lessons
            unitsAndLessonsFetched.push({
              Id: unit.Id,
              data,
            });
          },
        });
      }
    }

    async function setSingleChapterLessons(chapter) {
      let memItem = unitsAndLessonsFetched.find(
        (item) => item.Id == chapter.Id
      );
      if (memItem) {
        chapter.lessons = memItem.data;
      } else {
        return $.ajax({
          url: `https://schools.madrasati.sa/Teacher/Lessons/DrawTreeToClassLesson?id=${
            chapter.Id
          }&&_=${new Date().getTime()}`,
          headers: { requestverificationtoken: getCSRFToken() },
          // dataType: "json",
          type: "GET",
          contentType: "application/json; charset=utf-8",
          // data: JSON.stringify(payload),
          async: false,
          processData: false,
          cache: false,
          success: function (data) {
            chapter.lessons = data;
            // for each chapter
            // get unit lessons
            unitsAndLessonsFetched.push({
              Id: chapter.Id,
              data,
            });
          },
        });
      }
    }

    function showTable() {
      document.getElementById("table-cont").style.display = "flex";
    }

    function hideTable() {
      document.getElementById("table-cont").style.display = "none";
    }

    function showLoading() {
      hideTable();
      document.getElementById("loading-cont").style.display = "flex";
    }

    function hideLoading() {
      showTable();
      document.getElementById("loading-cont").style.display = "none";
    }

    function showReport(daysReport) {
      document.getElementById("report-container").style.display = "flex";
      let tbody = document.getElementById("report-table");
      tbody.innerHTML = "";
      for (let dayReport of daysReport) {
        let trElm = document.createElement("tr");
        let tdDay = document.createElement("td");
        tdDay.classList.add("navbar-default");
        tdDay.classList.add("white-text");
        tdDay.classList.add("bold");
        if (dayReport.name == "المجموع") {
          trElm.className = "total-row";
          tdDay.classList.add("total-row");
        }
        tdDay.innerText = dayReport.name;
        let tdLessons = document.createElement("td");
        tdLessons.innerText = dayReport.lessonsCount;
        let tdLessonsSet = document.createElement("td");
        tdLessonsSet.innerText = dayReport.lessonsSetCount;
        let tdLessonsUnset = document.createElement("td");
        tdLessonsUnset.innerText = dayReport.lessonsUnsetCount;
        let tdLessonsSetPercentage = document.createElement("td");
        tdLessonsSetPercentage.innerText =
          "%" + (dayReport.lessonsSetPercentage?.toFixed(2) || 0);
        let tdWithPrepareText = document.createElement("td");
        tdWithPrepareText.innerText = dayReport.lessonsWithPrepareCount;
        let tdWithVocabs = document.createElement("td");
        tdWithVocabs.innerText = dayReport.lessonsWithVocabsCount;
        let tdWithThinkingSkills = document.createElement("td");
        tdWithThinkingSkills.innerText =
          dayReport.lessonsWithThinkingSkillsCount;
        let tdWithCloseText = document.createElement("td");
        tdWithCloseText.innerText = dayReport.lessonsWithCloseTextCount;
        let tdWithEthraa = document.createElement("td");
        tdWithEthraa.innerText = dayReport.lessonsWithEthraaCount;
        let tdWithAssignment = document.createElement("td");
        tdWithAssignment.innerText = dayReport.lessonsWithAssignmentCount;
        let tdWithExam = document.createElement("td");
        tdWithExam.innerText = dayReport.lessonsWithExamCount;
        let tdWithProject = document.createElement("td");
        tdWithProject.innerText = dayReport.lessonsWithProjectCount;
        let tdElementsPercentage = document.createElement("td");
        tdElementsPercentage.innerText =
          "%" + (dayReport.lessonsElementsPercentage?.toFixed(2) || 0);
        trElm.append(
          tdDay,
          tdLessons,
          tdLessonsSet,
          tdLessonsUnset,
          tdLessonsSetPercentage,
          tdWithPrepareText,
          tdWithVocabs,
          tdWithThinkingSkills,
          tdWithCloseText,
          tdWithEthraa,
          tdWithAssignment,
          tdWithExam,
          tdWithProject,
          tdElementsPercentage
        );
        tbody.appendChild(trElm);
      }
    }

    function hideReport() {
      document.getElementById("report-container").style.display = "none";
    }

    function createCell(
      cellId,
      {
        title,
        subname,
        options,
        isSet,
        allowEdit,
        data,
        eschoolid,
        lectureIdEnc,
      } = {
        allowEdit: true,
        title: "TITLE",
        options: [{ value: "1", text: "1" }],
        isSet: false,
      }
    ) {
      let cellElm = document.getElementById(cellId);
      cellElm.innerHTML = "";
      let titleElm = document.createElement("span");
      titleElm.innerText = title;
      cellElm.classList.remove("set-cell");
      cellElm.classList.add("sc-uub-title");
      let br = document.createElement("br");
      let lastChild = document.createElement("div");
      if (allowEdit) {
        if (!isSet) {
          let select = document.createElement("select");
          select.setAttribute("data", data);
          select.setAttribute("eschoolid", eschoolid);
          select.setAttribute("subname", subname);
          select.setAttribute("cellid", cellId);
          select.setAttribute("lectureidenc", lectureIdEnc);
          select.classList.add("setup-select");
          // add first element
          let optionElm = document.createElement("option");
          optionElm.value = 0;
          optionElm.innerHTML = "اختر";
          select.append(optionElm);

          for (let option of options) {
            let optionElm = document.createElement("option");
            optionElm.value = option.value;
            optionElm.innerHTML = option.text;
            optionElm.style.backgroundColor = option.color;
            optionElm.style.color = "black";
            select.append(optionElm);
          }

          // create check boxes
          let checksCont = document.createElement("div");
          checksCont.className = "options-cont";
          checksCont.style.marginTop = "2px";
          checksCont.style.fontWeight = "bolder";
          let projectCheckboxCont = document.createElement("span");
          let assignmentCheckboxCont = document.createElement("span");
          let examCheckboxCont = document.createElement("span");
          // project checkbox
          let projectCheckbox = document.createElement("input");
          projectCheckbox.checked = false;
          projectCheckbox.type = "checkbox";
          projectCheckbox.className = "single-checkbox";
          projectCheckbox.setAttribute("data", data);
          projectCheckbox.setAttribute("data-name", "project");
          let pLabel = document.createElement("span");
          pLabel.style.margin = "2px";
          pLabel = " ط";
          projectCheckboxCont.append(projectCheckbox, pLabel);
          // assignment checkbox
          let assignmentCheckbox = document.createElement("input");
          assignmentCheckbox.checked = false;
          assignmentCheckbox.type = "checkbox";
          assignmentCheckbox.className = "single-checkbox";
          assignmentCheckbox.setAttribute("data", data);
          assignmentCheckbox.setAttribute("data-name", "assignment");
          let aLabel = document.createElement("span");
          aLabel.style.margin = "2px";
          aLabel = " و";
          assignmentCheckboxCont.append(assignmentCheckbox, aLabel);
          // exam checkbox
          let examCheckbox = document.createElement("input");
          examCheckbox.checked = false;
          examCheckbox.type = "checkbox";
          examCheckbox.className = "single-checkbox";
          examCheckbox.setAttribute("data", data);
          examCheckbox.setAttribute("data-name", "exam");
          let eLabel = document.createElement("span");
          eLabel.style.margin = "2px";
          eLabel = " خ";
          examCheckboxCont.append(examCheckbox, eLabel);

          checksCont.append(
            projectCheckboxCont,
            assignmentCheckboxCont,
            examCheckboxCont
          );
          lastChild.append(checksCont, br, select);
        } else {
          cellElm.classList.add("set-cell");
          // create delete button
          let delBtn = document.createElement("button");
          delBtn.innerHTML = "حذف";
          delBtn.className = "btn-sc danger small-btn";
          delBtn.setAttribute("lectureidenc", lectureIdEnc);
          delBtn.addEventListener("click", (event) => {
            handleDelete(event);
          });

          // create edit button
          let editBtn = document.createElement("button");
          editBtn.innerHTML = "عرض او تعديل";
          editBtn.className = "btn-sc navbar-default small-btn";
          editBtn.setAttribute("data", data);
          editBtn.addEventListener("click", (event) => {
            handleEdit(event);
          });

          lastChild.append(editBtn, delBtn);
        }
      } else {
        if (isSet) {
          cellElm.classList.add("set-cell");
        }
        let allowEditElm = document.createElement("span");
        allowEditElm.className = "inactive";
        allowEditElm.innerHTML = "محضرة";
        lastChild.append(allowEditElm);
      }
      let spanMsg = document.createElement("span");
      spanMsg.id = `span-msg-${cellId}`;
      cellElm.append(titleElm, br, br, lastChild, spanMsg);
    }

    function handleDelDayMouseover(event) {
      let day = event.target.getAttribute("data-day");
      // console.log(day);
      for (let i = 1; i < 9; i++) {
        document.getElementById(`${day}-${i}`).classList.add("will-del");
      }
    }
    function handleDelDayMouseout(event) {
      let day = event.target.getAttribute("data-day");
      // console.log(day);
      for (let i = 1; i < 9; i++) {
        document.getElementById(`${day}-${i}`).classList.remove("will-del");
      }
    }
    async function handleDelDayPressed(event) {
      let day = event.target.getAttribute("data-day");
      isDelete = confirm(
        `هل انت متأكد من حذف الكل ليوم ${names[parseInt(day - 1)]} ؟`
      );
      if (!isDelete) return;
      let loadingInfo = document.getElementById("loading-info");
      showLoading();
      for (let i = 1; i < 9; i++) {
        let cellId = `${day}-${i}`;
        let cell = document.getElementById(cellId);
        let btns = Array.prototype.slice.call(
          cell.getElementsByTagName("button"),
          0
        );
        let lectureIdEnc = btns[1]?.getAttribute("lectureidenc");
        if (lectureIdEnc) {
          for (let j = 0; j < btns.length; j++) {
            btns[j].parentNode.removeChild(btns[j]);
            cell.classList.remove("set-cell");
          }
          loadingInfo.innerText = `جاري حذف الحصة ${i} ليوم ${
            names[parseInt(day) - 1]
          } ...`;
          await deleteLesson(lectureIdEnc, false);
          let subTitleText = cell.getElementsByClassName("sc-sub-title")[0];
          if (subTitleText) {
            subTitleText.innerText = "";
          }
          let spanMsg = document.getElementById(`span-msg-${cellId}`);
          spanMsg.innerText = "تم الحذف";
        }
      }
      return 1;
    }

    async function handleDelAll(event) {
      isDelete = confirm("هل انت متأكد من حذف الكل ؟");
      let loadingInfo = document.getElementById("loading-info");
      if (!isDelete) return;
      showLoading();
      for (let day = 1; day < 6; day++) {
        for (let i = 1; i < 9; i++) {
          let cellId = `${day}-${i}`;
          let cell = document.getElementById(cellId);
          let btns = Array.prototype.slice.call(
            cell.getElementsByTagName("button"),
            0
          );
          let lectureIdEnc = btns[1]?.getAttribute("lectureidenc");
          if (lectureIdEnc) {
            for (let j = 0; j < btns.length; j++) {
              btns[j].parentNode.removeChild(btns[j]);
              cell.classList.remove("set-cell");
            }

            loadingInfo.innerText = `جاري حذف الحصة ${i} ليوم ${names[day]} ...`;
            await deleteLesson(lectureIdEnc, false);
            let spanMsg = document.getElementById(`span-msg-${cellId}`);
            let subTitleText = cell.getElementsByClassName("sc-sub-title")[0];
            if (subTitleText) {
              subTitleText.innerText = "";
            }
            spanMsg.innerText = "تم الحذف";
          }
        }
      }
      return 1;
    }

    function handleCheckAll(event) {
      let checked = event.target.checked;
      let checkboxName = event.target.getAttribute("data-name");
      let dataDay = event.target.getAttribute("data-day");
      let checkboxes = document.getElementsByClassName("single-checkbox");
      for (let elm of checkboxes) {
        if (elm.getAttribute("data-name") == checkboxName) {
          if (dataDay == "all") {
            elm.checked = checked;
            handleSingleCheckbox({ target: elm });
          } else {
            let cell = elm.parentNode.parentNode.parentNode.parentNode;
            if (cell.id.split("-")[0] == dataDay) {
              elm.checked = checked;
              handleSingleCheckbox({ target: elm });
            }
          }
        }
      }
    }

    function handleSingleCheckbox(event) {
      let checked = event.target.checked;
      let checkboxName = event.target.getAttribute("data-name");
      let data = event.target.getAttribute("data");
      // console.log(event.target);
      // console.log(event.target.checked);
      let found = toSave.find((o) => o.data == data);
      // console.log("found:", found);
      if (found) {
        found[checkboxName + "Checked"] = checked;
      }
      // console.log(toSave);
    }

    function handleSelectChange(event) {
      // project Checkbox
      checkboxes =
        event.target.parentNode.getElementsByClassName("single-checkbox");
      projectCheckbox = checkboxes[0].checked;
      assignmentCheckbox = checkboxes[1].checked;
      examCheckbox = checkboxes[2].checked;
      // console.log("=======");
      // console.log(projectCheckbox);
      // console.log(assignmentCheckbox);
      // console.log(examCheckbox);
      let val = event.target.value;
      let data = event.target.getAttribute("data");
      let eschoolid = event.target.getAttribute("eschoolid");
      let subname = event.target.getAttribute("subname");
      let cellId = event.target.getAttribute("cellid");
      let found = toSave.find((o) => o.data == data);
      if (val == "0") {
        toSave = toSave.filter((o) => o.data != data);
      } else {
        if (found) {
          found.value = val;
          found.projectChecked = projectCheckbox;
          found.assignmentChecked = assignmentCheckbox;
          found.examChecked = examCheckbox;
        } else {
          toSave.push({
            data: data,
            value: val,
            eschoolId: eschoolid,
            subName: subname,
            cellId,
            projectChecked: projectCheckbox,
            assignmentChecked: assignmentCheckbox,
            examChecked: examCheckbox,
          });
        }
      }
      // console.log(toSave);
    }

    async function handleEdit(event) {
      let data = event.target.getAttribute("data");
      window.open(
        "https://schools.madrasati.sa/Teacher/Lessons/LessonDetailsNew?Data=" +
          data
      );
    }

    async function deleteLesson(lectureIdEnc, refreshOnDelete = true) {
      return await $.ajax({
        url:
          "https://schools.madrasati.sa/Teacher/Droos/DeleteLessonFormTable?LessonId=" +
          lectureIdEnc,
        method: "GET",
        headers: { requestverificationtoken: getCSRFToken() },
        async: false,
      }).then((_) => {
        if (refreshOnDelete) loadTable();
      });
    }
    async function handleDelete(event) {
      isDelete = confirm("هل انت متأكد من حذف هذ التحضير ؟");
      if (!isDelete) return;
      showLoading();
      let lectureIdEnc = event.target.getAttribute("lectureidenc");
      let cell = event.target.parentNode.parentNode;
      let btns = Array.prototype.slice.call(
        cell.getElementsByTagName("button"),
        0
      );
      for (let j = 0; j < btns.length; j++) {
        btns[j].parentNode.removeChild(btns[j]);
        cell.classList.remove("set-cell");
      }

      let loadingInfo = document.getElementById("loading-info");
      loadingInfo.innerText = `جاري حذف التحضير ...`;
      let spanMsg = document.getElementById(`span-msg-${cell.id}`);
      spanMsg.innerText = "تم الحذف";
      deleteLesson(lectureIdEnc);
    }

    function setTableContent(daysInfo) {
      toSave = [];
      // remove old data
      for (let i = 1; i < 6; i++) {
        for (let j = 1; j < 9; j++) {
          cell = document.getElementById(`${i}-${j}`);
          cell.innerHTML = "";
          cell.classList.remove("set-cell");
        }
      }
      // fill cells
      for (let dayInfo of daysInfo) {
        for (let timeTable of dayInfo.TimeTable) {
          let cellId = `${timeTable.DayNumber + 1}-${timeTable.SlotNumber}`;
          let title = `${timeTable.ClassRoomName} - ${timeTable.SubjectName}`;
          let isSet = timeTable.LectureId;
          let allowEdit = timeTable.AllowEdit == 1;
          createCell(cellId, {
            lectureIdEnc: timeTable.LectureIdEnc,
            subname: timeTable.SubjectName,
            title,
            isSet,
            allowEdit,
            options: timeTable.options,
            data: timeTable.Data,
            eschoolid: timeTable.SchoolIdDec,
          });
        }
      }

      // on change select
      let selects = document.getElementsByClassName("setup-select");
      for (let selectElm of selects) {
        selectElm.addEventListener("change", handleSelectChange);
      }

      // on change select
      let checkBoxes = document.getElementsByClassName("single-checkbox");
      for (let cb of checkBoxes) {
        cb.addEventListener("change", handleSingleCheckbox);
      }
    }

    function respToDoc(resp) {
      let parser = new DOMParser();
      return parser.parseFromString(resp, "text/html");
    }

    async function lessonPlan(dataToken) {
      // dataToken : the data attribute in timeTable
      let data = await makeRequest({
        url: `https://schools.madrasati.sa/Teacher/Lessons/LessonPlan?Data=${dataToken}`,
        dataType: "html",
      });
      let respDoc = respToDoc(data);
      let startDate = respDoc.getElementById("StartDate").value;
      let endDate = respDoc.getElementById("EndDate").value;
      let isTreeLevel = respDoc.getElementById("IsTreeLevel").value;
      let ClassroomId = respDoc.getElementById("ClassroomId").value;
      let LectureStartTimeString = respDoc.getElementById(
        "LectureStartTimeString"
      ).value;
      let LectureEndTimeString = respDoc.getElementById(
        "LectureEndTimeString"
      ).value;
      let SubjectId = respDoc.getElementById("SubjectId").value;
      let TimeTableId = respDoc.getElementById("TimeTableId").value;
      let hfDrawTree = respDoc.getElementById("hfDrawTree").value;
      let hfViewContent = respDoc.getElementById("hfViewContent").value;
      let hfGetAssignment = respDoc.getElementById("hfGetAssignment").value;
      let hfLessonDetails = respDoc.getElementById("hfLessonDetails").value;
      let hfGradeBookTotalValue = respDoc.getElementById(
        "hfGradeBookTotalValue"
      ).value;
      let hfLevelsCount = respDoc.getElementById("hfLevelsCount").value;
      let hfAttachLinkUrl = respDoc.getElementById("hfAttachLinkUrl").value;
      let shortSchoolId = respDoc.getElementById("SchoolId").value;

      return {
        startDate,
        endDate,
        isTreeLevel,
        ClassroomId,
        LectureStartTimeString,
        LectureEndTimeString,
        SubjectId,
        TimeTableId,
        hfDrawTree,
        hfViewContent,
        hfGetAssignment,
        hfLessonDetails,
        hfGradeBookTotalValue,
        hfLevelsCount,
        hfAttachLinkUrl,
        shortSchoolId,
      };
    }

    async function lessonDetails(lessonId, treeId, startDate, endDate) {
      // lessonId: from option
      // treeId: the second id from the last
      // lectureClassId: 0
      // startDate : 12/13/2022 8:24:00 AM
      // endDate: 12/13/2022 9:05:00 AM

      let data = await makeRequest({
        url: `https://schools.madrasati.sa/Teacher/Lessons/LessonDetails?LessonId=${lessonId}&StartDate=${startDate}&EndDate=${endDate}&LectureClassId=0&TreeId=${treeId}`,
        dataType: "html",
      });
      let respDoc = respToDoc(data);
      let hdnHtmppathVal = respDoc.getElementById("hdnHtmppathVal").value;
      let lessonName = respDoc
        .getElementsByClassName("page-title border-0")[0]
        .innerText?.trim();
      let activitiesElms = getElementsWhenIdStartsWith(
        "input",
        "chkbox_",
        respDoc
      );
      let goals = getElementsWhenXStartsWith("label", "goal_", respDoc, "for");
      let preparationText = goals[0]?.innerText ?? lessonName;
      let closeText =
        goals[goals?.length - 1]?.innerText ??
        "تقويم الطالب في : " + lessonName;
      let activities = activitiesElms.map((activity) => activity.value);
      return {
        hdnHtmppathVal,
        lessonName,
        activities,
        preparationText,
        closeText,
      };
    }

    async function isQuran(subId, unitId) {
      let resp = await makeRequest({
        url: `https://schools.madrasati.sa/Teacher/Assignments/IsQuran?subId=${subId}&unitId=${unitId}`,
      });
      return resp.result;
    }

    async function addQuestionList(
      subId,
      eschoolId,
      treeId,
      lessonId,
      isTreeLevel
    ) {
      return await makeRequest({
        url: `https://schools.madrasati.sa/Teacher/Assignments/AddQuestionListPaging?subjectId=${subId}&eschoolId=${eschoolId}&treeId=${lessonId}&lessonId=${lessonId}&isTreelevel=${isTreeLevel}&pageNumber=1&searchInput=&questionType=&difficultyLevel=&creator=0`,
      });
    }

    // https://schools.madrasati.sa/Projects/Projects/Create?schoolId=2ECDBAF0658C4D7F2D465C4C1311DBBC

    async function createSchool(eschoolId) {
      let resp = await makeRequest({
        url: `https://schools.madrasati.sa/Projects/Projects/Create?schoolId=${eschoolId}`,
        dataType: "html",
      });

      let respDoc = respToDoc(resp);
      let hfLevelsCount = respDoc.getElementById("hfLevelsCount").value;
      let hfDrawTree = respDoc.getElementById("hfDrawTree").value;
      let __RequestVerificationToken = respDoc.getElementsByName(
        "__RequestVerificationToken"
      )[0].value;
      return {
        hfLevelsCount,
        hfDrawTree,
        __RequestVerificationToken,
      };
    }

    async function createProjectWithPost(
      __RequestVerificationToken,
      eschoolId,
      SelectedSubjectId,
      SelectedTrees_2,
      SelectedTrees_3,
      SelectedTrees_4,
      subjectName,
      hfLevelsCount,
      hfDrawTree
    ) {
      let Description = `
يمكنك مشاهدة هذا الدرس من خلال منصة عين.
- قم بالدخول لمنصة عين
- ثم قم بفتح رابط الدرس
 https://ibs.ien.edu.sa/#/planslessons/${SelectedTrees_2}
  `;
      let data = {
        TypeId: 1,
        __RequestVerificationToken,
        Id: "",
        schoolId: eschoolId,
        SelectedUnitId: SelectedSubjectId,
        SelectedTrees_2, // unit or chapter
        SelectedTrees_3,
        SelectedTrees_4,
        Name: `نشاط (${subjectName})`,
        CategoryId: 4,
        ClassificationLevel: 1,
        ProjectType: 2,
        Description,
        SolvingType: 3,
        AccessType: "False",
        hfLevelsCount,
        hfDrawTree,
      };
      return await $.ajax({
        url: `https://schools.madrasati.sa/Projects/Projects/Create`,
        method: "POST",
        data: serialize(data),
        async: false,
      }).then((data) => data);
    }

    async function createEthraaWithPost(
      __RequestVerificationToken,
      eschoolId,
      SelectedSubjectId,
      SelectedGoles,
      treeId,
      lessonName
    ) {
      let data = {
        __RequestVerificationToken,
        Id: 0,
        IsEduResource: true,
        SelectedUnitId: SelectedSubjectId,
        SelectedGoles,
        ActivityType: 1,
        Name: `اثراء الدرس على منصة عين`,
        Description: lessonName,
        IndicativeWords: Base64.encode(lessonName),
        FileType: "1",
        file: "(binary)",
        oneDriveTypesValidations: "pdf,png,jpeg,jpg",
        DriveFileName: "",
        Link: `https://ibs.ien.edu.sa/#/planslessons/${treeId}`,
        hfLevelsCount: "hfLevelsCount",
        hfDrawTree: "/LearningResources/MangeResources/DrawTreeToClassLesson",
        SchoolId: eschoolId,
      };
      return await $.ajax({
        url: `https://schools.madrasati.sa/LearningResources/MangeResources/Create`,
        method: "POST",
        data: serialize(data),
        async: false,
      }).then((data) => data);
    }

    async function createAssignmentWithPost(
      eschoolId,
      SelectedSubjectId,
      SelectedTrees_2,
      SelectedTrees_3,
      SelectedTrees_4,
      lessonName,
      hfLevelsCount,
      isQuraanSub
    ) {
      let Description = `قم بحل اسئلة الواجب على منصة عين: https://ibs.ien.edu.sa/#/planslessons/${SelectedTrees_2}`;
      let data = {
        SaveButton: "",
        IdEnc: "",
        Id: 0,
        TreeId: "",
        IsTreeLevel: "",
        isQuran: isQuraanSub,
        txt_UploadUrl: "/Teacher/Assignments/UploadFile",
        SelectedUnitId: SelectedSubjectId,
        SelectedTrees_2, // unit or chapter
        SelectedTrees_3,
        SelectedTrees_4,
        Name: `واجب (${lessonName})`,
        QuranLessonId: "",
        AssignmentType: 2,
        Description,
        filePath: "",
        PageNumber: "",
        QuestionsNumber: "",
        SolvingType: 3,
        AccessType: "False",
        schoolId: eschoolId,
        hfLevelsCount,
        hfDrawTree: "/Teacher/Assignments/DrawTreeToClassLesson",
        "X-Requested-With": "XMLHttpRequest",
      };
      return await $.ajax({
        url: `https://schools.madrasati.sa/Teacher/Assignments/Manage?Length=11`,
        method: "POST",
        data: serialize(data),
        headers: { requestverificationtoken: getCSRFToken() },
        async: false,
      }).then((data) => {
        // console.log("assignment created", data);
        return data;
      });
    }

    async function createExamWithPost(
      __RequestVerificationToken,
      lessonId,
      subId,
      unitId,
      treeId,
      eschoolId,
      tree2,
      tree3,
      tree4,
      lessonName,
      hfLevelsCount
    ) {
      return await $.ajax({
        url: `https://schools.madrasati.sa/Teacher/Exams/ExamSettings`,
        method: "POST",
        data: serialize({
          examIdEnc: "",
          lessonId,
          selectedUnitId: subId,
          treeId: lessonId,
        }),
        headers: { requestverificationtoken: getCSRFToken() },
        async: false,
      }).then(async (resp1) => {
        let resp1Doc = respToDoc(resp1.html);
        // console.log(resp1Doc);
        let elmntsQuestionTypeCode = getElementsWhenXEndsWith(
          "input",
          "__QuestionTypeCode",
          resp1Doc,
          "id"
        );
        let elmntsDifficultyFactor = getElementsWhenXEndsWith(
          "input",
          "__DifficultyFactor",
          resp1Doc,
          "id"
        );
        let elmntsItemCount = getElementsWhenXEndsWith(
          "input",
          "__itemCount",
          resp1Doc,
          "id"
        );
        let questionsPayload = {};
        for (let i = 0; i < elmntsQuestionTypeCode.length; i++) {
          questionsPayload[`List[${i}].NumberOfQuestions`] = 1;
          questionsPayload[`List[${i}].QuestionTypeCode`] =
            elmntsQuestionTypeCode[i].value;
          questionsPayload[`List[${i}].DifficultyFactor`] =
            elmntsDifficultyFactor[i].value;
          questionsPayload[`List[${i}].itemCount`] = elmntsItemCount[i].value;
        }
        // console.log("questionPayload: ", questionsPayload);
        let secondPayload = {
          __RequestVerificationToken,
          Id: 0,
          LessonParentId: unitId, // unitId
          TreeId: lessonId,
          LessonId: lessonId,
          IsTreeLevel: "",
          ExamId: "",
          SchoolId: eschoolId,
          ExamCategory: 3,
          SelectedUnitId: subId,
          SelectedTrees_2: tree2,
          SelectedTrees_3: tree3,
          SelectedTrees_4: tree4,
          Name: `اختبار (${lessonName})`,
          ExamType: 2,
          ExamQuestionSource: "ien",
          Description: "",
          AccessType: "False",
          AllowLessonContent: false,
          hfLevelsCount: hfLevelsCount,
          hfDrawTree: "/Teacher/Exams/DrawTreeToClassLesson",
          ...questionsPayload,
        };
        await $.ajax({
          url: `https://schools.madrasati.sa/Teacher/Exams/ExamQuestionSettings`,
          method: "POST",
          data: serialize(secondPayload),
          headers: { requestverificationtoken: getCSRFToken() },
          async: false,
        }).then(async (resp2) => {
          let resp2Doc = respToDoc(resp2.html);
          let elmntsQuestionTypeCodeNo = getElementsWhenXEndsWith(
            "input",
            "__QuestionTypeCodeNo",
            resp2Doc,
            "id"
          );
          let elmntsDifficultyFactorNo = getElementsWhenXEndsWith(
            "input",
            "__DifficultyFactorNo",
            resp2Doc,
            "id"
          );
          let elmntsId = getElementsWhenXEndsWith(
            "input",
            "__Id",
            resp2Doc,
            "id"
          );
          let questionsPayload2 = {};
          for (let i = 0; i < elmntsId.length; i++) {
            questionsPayload2[`QuestionsList[${i}].GradeInAssignment`] = 2;
            questionsPayload2[`QuestionsList[${i}].QuestionTypeCodeNo`] =
              elmntsQuestionTypeCodeNo[i].value;
            questionsPayload2[`QuestionsList[${i}].DifficultyFactorNo`] =
              elmntsDifficultyFactorNo[i].value;
            questionsPayload2[`QuestionsList[${i}].Id`] = elmntsId[i].value;
          }
          // console.log("questionsPayload2:", questionsPayload2);
          await $.ajax({
            url: `https://schools.madrasati.sa/Teacher/Exams/Manage?Length=5`,
            method: "POST",
            data: serialize({ ...secondPayload, ...questionsPayload2 }),
            headers: { requestverificationtoken: getCSRFToken() },
            async: false,
          }).then((resp3) => {});
        });
      });
    }

    async function getStudentBooks(subId) {
      let resp = await makeRequest({
        url: `https://schools.madrasati.sa/Teacher/Subjects/GetStudentBooks?Id=${subId}`,
        dataType: "html",
      });
      let respDoc = respToDoc(resp);
      // todo get ell books list: project-title -> project-title
      let booksLinks = respDoc.getElementsByClassName("btn btn-primary btn-xs");
      let booksNames = respDoc.getElementsByClassName("Maintdtitle");
      let books = [];
      for (let i = 0; i < booksLinks.length; i++) {
        books.push({
          name: booksNames[i]?.innerText ?? "كتاب الطالب",
          link: booksLinks[i]?.href,
        });
      }

      return { books };
    }

    async function getGoalLessonSubject(subId, lessonId) {
      let goals = await $.ajax({
        url: "https://schools.madrasati.sa/LearningResources/MangeResources/GetGoalLessonSubject",
        method: "POST",
        data: serialize({ subjectId: subId }),
        headers: { requestverificationtoken: getCSRFToken() },
        async: false,
      }).then((data) => data);
      let selectedGoals = goals.filter((goal) => goal.LessonId == lessonId);
      return {
        selectedGoals: selectedGoals.map((goal) => goal.GoalId),
        selectedGoles: selectedGoals.map((goal) => ({
          GoalId: goal.GoalId,
          LessonId: goal.LessonId,
        })),
        selectedGolesBase64: Base64.encode(
          JSON.stringify(
            selectedGoals.map((goal) => ({
              GoalId: goal.GoalId,
              LessonId: goal.LessonId,
            }))
          )
        ),
      };
    }

    function createPayload1(subId, unitId, lessonId, schoolId) {
      return {
        // unit id
        childOfSubject: unitId,
        lectureActivitiesList: "",
        lessonId,
        schoolId,
        selectedUnitId: subId,
        treeId: lessonId,
        searchInput: "",
        accessType: "",
        createdByme: false,
        IsGradeBookApproved: "False",
        lectureAssignmentsList: "",
        sumLectureAssignmentsGradeBook: "0",
        title: "",
        lectureExamsList: "",
        sumLectureExamsGradeBook: 0,
        lectureProjectsList: "",
        sumLectureProjectsGradeBook: 0,
      };
    }

    async function createEthraa(payload1) {
      let resp = await $.ajax({
        url: "https://schools.madrasati.sa/Teacher/Lessons/AddActivity",
        method: "POST",
        data: serialize(payload1),
        headers: { requestverificationtoken: getCSRFToken() },
        async: false,
      }).then(async (_) => {
        return await $.ajax({
          url: "https://schools.madrasati.sa/Teacher/Lessons/GetActivitiesList",
          method: "POST",
          data: serialize(payload1),
          headers: { requestverificationtoken: getCSRFToken() },
          async: false,
        }).then(async (data) => {
          return data.html;
        });
      });
      let respDoc = respToDoc(resp);
      let activityId = getElementsWhenNameStartsWith(
        "input",
        "activityId_",
        respDoc
      )[0]?.value;
      let baseId = getElementsWhenNameStartsWith(
        "input",
        "activityId_",
        respDoc
      )[0]?.id;
      if (!activityId) {
        return {
          baseId: null,
          activityId: null,
          activityType: null,
          activityName: null,
          filePath: null,
          logoPicPath: null,
        };
      }
      let activityType = getElementsWhenNameStartsWith(
        "input",
        "activityType_",
        respDoc
      )[0].value;
      let activityName = getElementsWhenNameStartsWith(
        "input",
        "activityName_",
        respDoc
      )[0].value?.trim();
      let filePath = getElementsWhenNameStartsWith(
        "input",
        "filePath_",
        respDoc
      )[0].value;
      let logoPicPath = getElementsWhenNameStartsWith(
        "input",
        "logoPicPath_",
        respDoc
      )[0].value;
      return {
        baseId: baseId.split("_")[1],
        activityId,
        activityType,
        activityName,
        filePath,
        logoPicPath,
      };
    }

    async function createAssignment(payload1, lessonPlanData) {
      let resp = await $.ajax({
        url: "https://schools.madrasati.sa/Teacher/Lessons/AddAssignment",
        method: "POST",
        data: serialize(payload1),
        headers: { requestverificationtoken: getCSRFToken() },
        async: false,
      }).then(async (_) => {
        // get assignment
        return await $.ajax({
          url: "https://schools.madrasati.sa/Teacher/Lessons/GetAssignmentsList",
          method: "POST",
          data: serialize(payload1),
          headers: { requestverificationtoken: getCSRFToken() },
          async: false,
        }).then(async (data) => {
          return data.html;
        });
      });
      let respDoc = respToDoc(resp);
      let assignmentId = getElementsWhenNameStartsWith(
        "input",
        "assignmentId_",
        respDoc
      )[0]?.value;
      let baseId = getElementsWhenNameStartsWith(
        "input",
        "assignmentId_",
        respDoc
      )[0]?.id;
      if (!assignmentId) {
        return {
          baseId: null,
          assignmentId: null,
          assignmentType: null,
          assignmentName: null,
          grade: null,
          startTime: null,
          endTime: null,
          isGradeBook: false,
        };
      }
      let assignmentType = getElementsWhenNameStartsWith(
        "input",
        "assignmentType_",
        respDoc
      )[0].value;
      let assignmentName = getElementsWhenNameStartsWith(
        "input",
        "assignmentName_",
        respDoc
      )[0].value?.trim();
      let grade = 5;
      let { startTime, endTime } = createStartAndEndTime();

      // add assignment to lecture
      await $.ajax({
        url: "https://schools.madrasati.sa/Teacher/Lessons/AddAssignmentToLecture",
        method: "POST",
        data: serialize({
          SchoolId: lessonPlanData.shortSchoolId,
          StartDate: lessonPlanData.startDate,
          assignmentId,
          assignmentType,
          eDate: endTime.split(" ")[0],
          sDate: startTime.split(" ")[0],
          isGradeBook: false,
        }),
        headers: { requestverificationtoken: getCSRFToken() },
        async: false,
      }).then((data) => {
        startTime = data.startDateTime;
        endTime = data.endDateTime;
      });
      return {
        baseId: baseId.split("_")[1],
        assignmentId,
        assignmentType,
        assignmentName,
        grade,
        startTime,
        endTime,
        isGradeBook: false,
      };
    }

    async function createExam(payload1, lessonPlanData) {
      let resp = await $.ajax({
        url: "https://schools.madrasati.sa/Teacher/Lessons/AddExam",
        method: "POST",
        data: serialize(payload1),
        headers: { requestverificationtoken: getCSRFToken() },
        async: false,
      }).then(async (_) => {
        return await $.ajax({
          url: "https://schools.madrasati.sa/Teacher/Lessons/GetExamsList",
          method: "POST",
          data: serialize(payload1),
          headers: { requestverificationtoken: getCSRFToken() },
          async: false,
        }).then(async (data) => {
          return data.html;
        });
      });
      let respDoc = respToDoc(resp);
      let examId = getElementsWhenIdStartsWith("input", "ExamId_", respDoc)[0]
        ?.value;
      let baseId = getElementsWhenIdStartsWith("input", "ExamId_", respDoc)[0]
        ?.id;
      let examName, egrade, startTime, endTime, duration, timeData;
      timeData = createStartAndEndTime();
      startTime = timeData.startTime;
      endTime = timeData.endTime;
      if (examId) {
        examName = getElementsWhenIdStartsWith(
          "input",
          "Name_",
          respDoc
        )[0]?.value?.trim();
        egrade = getElementsWhenIdStartsWith("input", "egrade_", respDoc)[0]
          ?.value;
        duration = 20;

        // add exam to lecture
        await $.ajax({
          url: "https://schools.madrasati.sa/Teacher/Lessons/AddSelectedExam",
          method: "POST",
          data: serialize({
            ExamId: examId,
            SchoolId: lessonPlanData.shortSchoolId,
            StartDate: lessonPlanData.startDate,
            eDate: endTime.split(" ")[0],
            examIsGradeBook: false,
            sDate: startTime.split(" ")[0],
          }),
          headers: { requestverificationtoken: getCSRFToken() },
          async: false,
        }).then((data) => {
          startTime = data.startDateTime;
          endTime = data.endDateTime;
        });
      }

      return {
        baseId: baseId?.split("_")[1],
        examId,
        examName,
        egrade,
        startTime,
        endTime,
        duration,
        examIsGradeBook: false,
      };
    }

    async function createProject(payload1, lessonPlanData) {
      // // create project
      // await $.ajax({
      //   url: "https://schools.madrasati.sa/Projects/Projects/Create",
      //   method: "POST",
      //   data: serialize(payload1),
      //   headers: { requestverificationtoken: getCSRFToken() },
      //   async: false,
      // }).then(async (_) => {});

      // add project
      let resp = await $.ajax({
        url: "https://schools.madrasati.sa/Teacher/Lessons/AddProject",
        method: "POST",
        data: serialize(payload1),
        headers: { requestverificationtoken: getCSRFToken() },
        async: false,
      }).then(async (_) => {
        return await $.ajax({
          url: "https://schools.madrasati.sa/Teacher/Lessons/GetProjectsList",
          method: "POST",
          data: serialize(payload1),
          headers: { requestverificationtoken: getCSRFToken() },
          async: false,
        }).then(async (data) => {
          return data.html;
        });
      });
      let respDoc = respToDoc(resp);
      let projectId = getElementsWhenNameStartsWith(
        "input",
        "ProjectId_",
        respDoc
      )[0]?.value;
      let baseId = getElementsWhenNameStartsWith(
        "input",
        "ProjectId_",
        respDoc
      )[0]?.id;

      let projectName, projectType, startTime, endTime, timeData;
      timeData = createStartAndEndTime();
      startTime = timeData.startTime;
      endTime = timeData.endTime;
      if (!projectId) {
        return {
          baseId: null,
          projectId: null,
          projectName: null,
          projectType: null,
          projectGrade: null,
          startTime: null,
          endTime: null,
          isGradeBook: false,
        };
      }

      projectName = getElementsWhenNameStartsWith(
        "input",
        "ProjectName_",
        respDoc
      )[0]?.value?.trim();
      projectType = getElementsWhenNameStartsWith(
        "input",
        "ProjectType_",
        respDoc
      )[0]?.value;
      // add project to lecture
      await $.ajax({
        url: "https://schools.madrasati.sa/Teacher/Lessons/AddProjectToLecture",
        method: "POST",
        data: serialize({
          SchoolId: lessonPlanData.shortSchoolId,
          StartDate: lessonPlanData.startDate,
          eDate: endTime.split(" ")[0],
          projectId,
          sDate: startTime.split(" ")[0],
        }),
        headers: { requestverificationtoken: getCSRFToken() },
        async: false,
      }).then((data) => {
        startTime = data.startDateTime;
        endTime = data.endDateTime;
      });
      return {
        baseId: baseId?.split("_")[1],
        projectId,
        projectName,
        projectType,
        projectGrade: 10,
        startTime,
        endTime,
        isGradeBook: false,
      };
    }

    async function postFullForm(fullFormData) {
      let resp = await $.ajax({
        url: "https://schools.madrasati.sa/Teacher/Lessons/SaveLastLessonPlan",
        method: "POST",
        data: fullFormData,
        headers: { requestverificationtoken: getCSRFToken() },
        async: false,
        processData: false,
        contentType: false,
      }).then(async (data) => {});

      return resp;
    }

    function createFullFormData(
      lessonName,
      __RequestVerificationToken,
      timeTableData,
      goals, // list of goals ids
      LectureClassPreparationText,
      LessonVocabulary,
      ThinkingSkills,
      LectureClassCloseText,
      TeacherNote,
      lessonPlanData,
      unitId,
      tree2,
      tree3,
      tree4,
      activity,
      exam,
      project,
      assignment,
      ienLink,
      books
    ) {
      TeacherNote = `لمزيد من الاثراءات عن هذا الدرس وحل بعض الأسئلة .. يمكنك زيارة منصة عين عبر الخطوات التالية :

1- تسجيل الدخول لمنصة عين بحسابك
2- فتح رابط الدرس التالي

https://ibs.ien.edu.sa/#/planslessons/${unitId}`;
      LessonVocabulary = `يمكنك الإطلاع على مفردات الدرس من خلال الكتاب الإلكتروني لدرس ( ${lessonName} )
للحصول على الكتاب الإلكتروني انظر الى التهيئة`;

      ThinkingSkills =
        "الفهم ، التذكر ، التطبيق ، التحليل ، التركيب ، التفكير الناقد ، الملاحظة ، العصف الذهني ، التقويم";

      let formData = new FormData();
      formData.append("__RequestVerificationToken", __RequestVerificationToken);
      formData.append("SchoolId", lessonPlanData.shortSchoolId);
      formData.append("Data", timeTableData);
      formData.append("ClassroomId", lessonPlanData.ClassroomId);
      formData.append("StartDate", lessonPlanData.startDate);
      formData.append("EndDate", lessonPlanData.endDate);

      formData.append(
        "LectureStartTimeString",
        lessonPlanData.LectureStartTimeString
      );
      formData.append(
        "LectureEndTimeString",
        lessonPlanData.LectureEndTimeString
      ); // from lessonPlanPage #LectureEndTimeString
      formData.append("SubjectId", lessonPlanData.SubjectId); // from lessonPlanPage
      formData.append("IsTreeLevel", lessonPlanData.isTreeLevel); // from lessonPlanPage #IsTreeLevel
      formData.append("TimeTableId", lessonPlanData.TimeTableId); // from lessonPlanPage

      formData.append("Id", 0);
      formData.append("Title", "");
      formData.append("TreeId", "");
      formData.append("IsTreeLevel", lessonPlanData.isTreeLevel); // from lessonPlanPage #IsTreeLevel
      formData.append(
        "SelectedTrees",
        "System.Collections.Generic.List`1[Business.ViewModels.Teacher.TreeModelViewList]"
      );
      formData.append("lectureNum", "");
      formData.append("dateTicks", "");
      formData.append("showPlayer", "False");
      formData.append("IsGradeBookApproved", "False");
      formData.append("OriginalLectureClassId", "");

      formData.append("SchoolId", lessonPlanData.shortSchoolId);
      formData.append("Data", timeTableData);
      formData.append("ClassroomId", lessonPlanData.ClassroomId);
      formData.append("SubjectId", lessonPlanData.SubjectId); // from lessonPlanPage
      formData.append("TreeCodeTypeIsLesson", true);
      formData.append("SelectedUnitId", lessonPlanData.SubjectId);
      formData.append("SelectedTrees_2", tree2);
      formData.append("SelectedTrees_3", tree3);
      formData.append("SelectedTrees_4", tree4);

      formData.append("StartDate", lessonPlanData.startDate);
      formData.append("EndDate", lessonPlanData.endDate);
      formData.append(
        "LectureStartTimeString",
        lessonPlanData.LectureStartTimeString
      );
      formData.append(
        "LectureEndTimeString",
        lessonPlanData.LectureEndTimeString
      ); // from lessonPlanPage #LectureEndTimeString
      formData.append("SubjectId", lessonPlanData.SubjectId); // from lessonPlanPage
      formData.append("Data", timeTableData);
      formData.append("IsTreeLevel", lessonPlanData.isTreeLevel); // from lessonPlanPage #IsTreeLevel
      formData.append("TimeTableId", lessonPlanData.TimeTableId); // from lessonPlanPage
      formData.append("Id", 0);
      formData.append("SchoolId", lessonPlanData.shortSchoolId);
      formData.append("Title", "");
      formData.append("TeacherId", 0);
      formData.append("AllowVCR", false);
      formData.append("LessonType", 2);
      formData.append("CopyLessonFlag", 1);

      formData.append("hfLevelsCount", lessonPlanData.hfLevelsCount); // from lessonPlan,
      formData.append("hfDrawTree", lessonPlanData.hfDrawTree); // from lessonPlan
      formData.append("hfViewContent", lessonPlanData.hfViewContent); // from lessonPlan
      formData.append("hfGetAssignment", lessonPlanData.hfGetAssignment); // from lessonPlan
      formData.append("hfLessonDetails", lessonPlanData.hfLessonDetails); // from lessonPlan
      formData.append(
        "hfGradeBookTotalValue",
        lessonPlanData.hfGradeBookTotalValue
      ); // from lessonPlan
      formData.append(
        "LectureClassPreparationText",
        LectureClassPreparationText
      ); // todo: generate preparation
      formData.append("LessonVocabulary", LessonVocabulary); // todo: generate vocabs

      // activities
      let activities = lessonPlanData.activities;
      activities.forEach((a) => formData.append("activities", a));

      // goals
      goals.forEach((a) => formData.append("goals", a));

      // strategies
      let strategies = [1, 2, 3, 4, 11, 12];
      strategies.forEach((a) => formData.append("strategies", a));

      // teachingTools
      let teachingTools = [1, 2, 3, 4, 5, 7, 9, 11];
      teachingTools.forEach((a) => formData.append("teachingTools", a));

      //
      formData.append("ThinkingSkills", ThinkingSkills); // todo; generate thinking skills
      formData.append("LectureClassCloseText", LectureClassCloseText); // todo", ge;erate closeText
      formData.append("hf_removeAttach", "");

      if (activity.activityId) {
        // formData
        formData.append(
          "LectureClassLearningResources[0].ActivityType",
          activity.activityType
        );
        formData.append(
          "LectureClassLearningResources[0].ActivityPath",
          activity.filePath
        );
        formData.append(
          "LectureClassLearningResources[0].Name",
          activity.activityName
        );
        formData.append(
          "LectureClassLearningResources[0].ActivityId_Enc",
          activity.activityId
        );
      }

      if (assignment.assignmentId) {
        // formData
        formData.append(
          "LectureAssignmentsList[0].AssignmentId",
          assignment.assignmentId
        );
        formData.append("LectureAssignmentsList[0].Grade", assignment.grade);
        formData.append(
          "LectureAssignmentsList[0].StartTime",
          assignment.startTime
        );
        formData.append(
          "LectureAssignmentsList[0].EndTime",
          assignment.endTime
        );
        formData.append("LectureAssignmentsList[0].IsGradeBook", false);
        formData.append(
          "LectureAssignmentsList[0].Name",
          assignment.assignmentName
        );
      }

      if (exam.examId) {
        // formData
        formData.append("LectureExamsList[0].ExamId", exam.baseId);
        formData.append("LectureExamsList[0].Duration", exam.duration);
        formData.append("LectureExamsList[0].StartTime", exam.startTime);
        formData.append("LectureExamsList[0].EndTime", exam.endTime);
        formData.append("LectureExamsList[0].Grade", exam.egrade);
        formData.append("LectureExamsList[0].Name", exam.examName);
        formData.append("LectureExamsList[0].ExamIsGradeBook", false);
      }

      if (project.projectId) {
        // formData
        formData.append("LectureProjectsList[0].ProjectId", project.projectId);
        formData.append("LectureProjectsList[0].Grade", project.projectGrade);
        formData.append("LectureProjectsList[0].StartTime", project.startTime);
        formData.append("LectureProjectsList[0].EndTime", project.endTime);
        formData.append("LectureProjectsList[0].IsGradeBook", false);
        formData.append("LectureProjectsList[0].Name", project.projectName);
      }
      formData.append("AttachmentFiles[0].AttachType", 3);
      formData.append("AttachmentFiles[0].FilePath", ienLink);
      formData.append(
        "AttachmentFiles[0].Name",
        `بعد تسجيل الدخول الى منصة عين , يمكنك التعرف على محتويات الدرس من خلال هذا الرابط`
      );
      formData.append("AttachmentFiles[0].FileCategory", 1);

      if (books.length > 0) {
        for (let i = 0; i < books.length; i++) {
          formData.append(`AttachmentFiles[${1 + i}].AttachType`, 3);
          formData.append(`AttachmentFiles[${1 + i}].FilePath`, books[i].link);
          formData.append(`AttachmentFiles[${1 + i}].Name`, books[i].name);
          formData.append(`AttachmentFiles[${1 + i}].FileCategory`, 1);
        }
      }

      formData.append("TeacherNote", TeacherNote);
      formData.append("hfAttachLinkUrl", lessonPlanData.hfAttachLinkUrl); // from lessonPlan
      formData.append("Name", "");
      formData.append("LectureClassId", "");
      formData.append("Type", "");
      formData.append("FileId", "");
      formData.append("FullPath", "");

      return formData;
    }

    // delay function
    async function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function getUrlParams() {
      let urlParams;
      let match,
        pl = /\+/g, // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) {
          return decodeURIComponent(s.replace(pl, " "));
        },
        query = window.location.search.substring(1);

      urlParams = {};
      while ((match = search.exec(query)))
        urlParams[decode(match[1])] = decode(match[2]);
      return urlParams;
    }

    async function fillLessonData(url, document, window, _frame) {
      let params = url;
      // console.log('THIS IS PARAMS', params);
      // console.log(params);
      if (params.autoFill != 1) {
        return;
      }

      let treeData = params.treeData;
      treeData = treeData.split(",");
      let unitId = treeData[1];
      let x = null;

      while (x == null) {
        x = document.getElementById("SelectedUnitId");
        if (x) {
          x.value = treeData[0];
          x.dispatchEvent(new Event("change"));
        }
        await delay(500);
      }

      x = null;
      while (!x) {
        x = document.getElementById("SelectedTrees_2");
        if (x) {
          x.value = treeData[1];
          x.dispatchEvent(new Event("change"));
        }
        await delay(500);
      }

      x = null;
      while (!x) {
        x = document.getElementById("SelectedTrees_3");
        if (x) {
          x.value = treeData[2];
          x.dispatchEvent(new Event("change"));
        }
        await delay(500);
      }

      if (treeData.length == 4) {
        x = null;
        while (!x) {
          x = document.getElementById("SelectedTrees_4");
          if (x) {
            x.value = treeData[3];
            x.dispatchEvent(new Event("change"));
          }
          await delay(500);
        }
      }

      document.getElementById("LessonType2").click();

      // click next
      document.getElementsByClassName("btn btn-primary")[2].click();
      await delay(3000);
      await fillResources(url, document);
      // check activities
      await checkActivities(url, document);
      await delay(200);
      await checkGoals(url, document);
      await delay(200);
      await checkStrateies(url, document);
      await delay(200);
      await checkTeachingTools(url, document);
      await delay(200);
      await fillInputs(url, document);
      await delay(200);
      async function _closeClick(modelContainer, container) {
        let _click = modelContainer.getElementsByClassName("btn-danger")[0];
        _click.click();
        let backdiv = container.getElementsByClassName("backdiv")[0];
        backdiv.click();
      }
      function _saveBtn(modelContainer, container) {
        let _click = modelContainer.getElementsByClassName("btn-main")[0];
        _click.click();
        // console.log(_click, 'THIS IS THE MAIN BTN ');
        let backdiv = container.getElementsByClassName("backdiv")[0];
        backdiv.click();
      }
      async function waitFor(el, time) {
        return new Promise((resolve, reject) => {
          let timer = setInterval(() => {
            // console.log(el, 'out', time);
            if (el()) {
              // console.log(el, 'in');
              clearInterval(timer);
              resolve("exist");
            }
          }, 300);
        });
      }
      async function _createTask(btn, container, assignmentBtn, _values, url) {
        return new Promise(async (res, reject) => {
          //  await waitFor(() => document.getElementById(btn))
          btn = document.getElementById(btn).getElementsByTagName("a")[0];
          btn.click();
          await waitFor(() => document.getElementById(container));
          let _container = document.getElementById(container);
          await waitFor(() => _container.getElementsByClassName("row")[0]);
          let tr = _container.getElementsByTagName("tr")[0];
          console.log(_container);
          if (tr) {
            let td = tr.getElementsByTagName("td");
            td = td[td.length - 1];
            // console.log(td)
            let _btn = td.getElementsByClassName(assignmentBtn)[0];
            // console.log(_btn, 'asdjkasljdkasdhkjsahdjksahdjskjaksdjaksldjkals');
            _btn.click();
            await waitFor(
              () => _container.getElementsByClassName("modal-content")[0]
            );
            let modalContent =
              _container.getElementsByClassName("modal-content")[0];

            // console.log(modalContent);

            let inps = modalContent.getElementsByTagName("input");
            let _startDate = inps[0];
            let _endDate = inps[1];
            let _degree = inps[2];
            _startDate.value = _values[0];
            _endDate.value = _values[1];
            _degree.value = _values[2];
            // Array.from(inps).forEach((e, i) => {
            //   if(e?.getAttribute("name")?.startsWith("aedate")) e.value = _values[i]
            //   if(e?.getAttribute("name")?.startsWith("grade")) e.value = _values[i]
            // })
            //if(_startDate.getAttribute("name").startsWith("aedate")) _startDate.value = _values[0]
            //if(_endDate.getAttribute("name").startsWith("aedate")) _endDate.value = _values[1]
            //if(_grade.getAttribute("name").startsWith("grade")) _grade.value = _values[2]
            _saveBtn(modalContent, _container);

            Array.from(
              document.getElementsByClassName("modal-backdrop in")
            ).forEach((el) => {
              el.style.cssText =
                "width:0;height:0;overflow:hidden;pading:0;margin:0;";
            });
          } else {
            let backdiv = _container.getElementsByClassName("backdiv")[0];
            backdiv.click();
          }
          res(true);
        });
      }
      let _d = createStartAndEndTime();
      let toHijry = (d) =>
        new Date(d).toLocaleDateString("en-US-u-ca-islamic-umalqura", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        });
      let addZero = (d) => (d.length === 1 ? "0" + d : d);
      let _startDate = toHijry(_d.startTime);
      _startDate = _startDate.replace(/([^\d|\/])/g, "").split("/");
      _startDate[0] = addZero(_startDate[0]);
      _startDate[1] = addZero(_startDate[1]);
      _startDate = _startDate[2] + "/" + _startDate[0] + "/" + _startDate[1];
      let _EndtDate = toHijry(_d.endTime);
      _EndtDate = _EndtDate.replace(/([^\d|\/])/g, "").split("/");
      _EndtDate[0] = addZero(_EndtDate[0]);
      _EndtDate[1] = addZero(_EndtDate[1]);
      _EndtDate = _EndtDate[2] + "/" + _EndtDate[0] + "/" + _EndtDate[1];

      if (url.withAssignment === "true") {
        await _createTask(
          "assignmentAddbtn",
          "divSearchAssignmentsContainerId",
          "selectAssignment",
          [_startDate, _EndtDate, 3]
        );
      }
      if (url.withExam === "true") {
        await _createTask(
          "examAddbtn",
          "divSearchExamsContainerId",
          "gradeQuestion",
          [_startDate, _EndtDate, 5]
        );
      }
      if (url.withProject === "true") {
        await _createTask(
          "projectAddbtn",
          "divSearchProjectsContainerId",
          "selectProject",
          [_startDate, _EndtDate, 3]
        );
      }
      let scrollToBottomTimer = setTimeout(() => {
        window.scrollBy(0, document.body.scrollHeight);
      }, 2500);

      
      let isRecaptchaFrame = () => {
        return /https:\/\/www.google.com\/recaptcha\/api2\/anchor/.test(
          window.location.href
        );
      };

      let captchaInterval = setInterval(() => {
        if (isRecaptchaFrame()) {
          clearInterval(captchaInterval);
          document
            .getElementsByClassName("recaptcha-checkbox-checkmark")[0]
            .click();
        }
      }, 500);

      let captTimer = setInterval(() => {
        // captcha.getAttribute('value')!=='' ? console.log('the value'): ''
        let captcha = document.getElementById("Captcha");
        if (captcha.value) {
          // console.log(captcha.value);
          Array.from(
            document.getElementsByClassName("btn btn-primary")
          ).forEach((el) => {
            if (el.innerText.indexOf("حفظ و إنهاء") > -1) {
              // console.log(el);
              // console.log('clicked');
              el.click();
              setTimeout(() => {
                // console.log(_frame);

                _frame.remove();
                if (!document.getElementsByClassName("page-frames")[0]) {
                  // window.location.reload()
                  // console.log(window.location);
                }
              }, 1500);
              clearTimeout(scrollToBottomTimer);
              //window.setTimeout(() => {
              //  window.close();
              //}, 300)
            }
          });
          clearInterval(captTimer);
        }
      }, 1000);
      //secondPage
      //divSearchExamsContainerId
      //divSearchAssignmentsContainerId
      //divSearchProjectsContainerId

      // let scrollToBottomTimer = setTimeout(() => {
      //   window.scrollBy(0, document.body.scrollHeight)
      // }, 2500)

      // let captTimer = setInterval(() => {
      //   // captcha.getAttribute('value')!=='' ? console.log('the value'): ''
      //   let captcha = document.getElementById('Captcha')
      //   if (captcha.value) {
      //     // console.log(captcha.value);
      //     Array.from(document.getElementsByClassName('btn btn-primary')).forEach((el) => {
      //       if (el.innerText.indexOf('حفظ و إنهاء') > -1) {
      //         // console.log(el);
      //         // console.log('clicked');
      //         el.click()
      //         clearTimeout(scrollToBottomTimer);
      //         window.setTimeout(() => {
      //           window.close();
      //         }, 300)

      //       }
      //     })
      //     clearInterval(captTimer)

      //   }
      // }, 1000)
    }

    function generateAttachment(fileId, href, name) {
      return `
      <div class="row attachment-element-for-count" id="file_${fileId}">
        <div class="col-md-8">

   <p style="padding:10px 0px 5px 0px;position:relative">
        <a target="_blank" href="${href}">${name}</a>
    </p>

            <span style="position: absolute;left: 10px;top:50%">
                <a class="color-orange" title="حذف" style="color:red" onclick="DeleteAttachment(this,${fileId},3 )">
                    <i class="fa fa-times-circle fa-lg" aria-hidden="true"></i> حذف
                </a>
            </span>
            <input type="hidden" name="AttachmentFiles[${fileId}].AttachType" value="3">
            <input type="hidden" name="AttachmentFiles[${fileId}].FilePath" value="${href}">
            <input type="hidden" name="AttachmentFiles[${fileId}].Name" value="${name}">
            <input type="hidden" name="AttachmentFiles[${fileId}].FileCategory" value="1">
        </div>
    </div>
`;
    }

    async function fillResources(url, document) {
      let params = url;

      let withExam = params.withExam;
      let withAssignment = params.withAssignment;
      let withProject = params.withProject;
      let eschoolId = params.eschoolId;
      let treeData = params.treeData;
      let subName = params.subName;
      let lessonName = document.getElementsByClassName(
        "select2-selection__choice"
      )[0].title;
      let tree2 = treeData[1];
      let tree3 = treeData[2]; // tree id  this will be responsible for color
      let tree4 = treeData[3];
      treeData = treeData.split(",");
      let subId = treeData[0];
      let unitId = treeData[1];
      let treeId = treeData[treeData.length - 2];
      let lessonId = treeData[treeData.length - 1];
      let { books } = await getStudentBooks(subId);
      let ienLink = `https://ibs.ien.edu.sa/#/planslessons/${treeId}`;
      let { hfLevelsCount, hfDrawTree } = await createSchool(eschoolId);
      hfLevelsCount = treeData.length;

      // fill attachments
      let attachmentsContainer = document.getElementById("divTempLinks");
      attachmentsContainer.innerHTML = "";
      attachmentsContainer.innerHTML += generateAttachment(
        0,
        ienLink,
        `بعد تسجيل الدخول الى منصة عين , يمكنك التعرف على محتويات الدرس من خلال هذا الرابط`
      );
      if (books.length > 0) {
        for (let i = 0; i < books.length; i++) {
          attachmentsContainer.innerHTML += generateAttachment(
            1 + i,
            books[i].link,
            books[i].name
          );
        }
      }

      // get imortant data for requests
      let __RequestVerificationToken = document.getElementsByName(
        "__RequestVerificationToken"
      )[0].value;
      // fill ethraas
      // create ehraa
      let { selectedGolesBase64 } = await getGoalLessonSubject(subId, lessonId);
      let isQuraanSub = await isQuran(subId, unitId);
      // ethraa required

      let payload1 = createPayload1(subId, unitId, lessonId, eschoolId);
      await createEthraaWithPost(
        __RequestVerificationToken,
        eschoolId,
        subId,
        selectedGolesBase64,
        treeId,
        lessonName
      );

      // $.ajax(({
      //   url: url,
      //   method: 'POST',
      //   data: JSON.stringify(
      //     {
      //       LessonIds: [{ Id: lessonId, Name: lessonName }],
      //       // [{ Id: "163670", Name: "العمليات الحسابية المركبية" }]
      //       childOfSubject: unitId,
      //       // "34854"
      //       isApproved: false, //    false
      //       lectureAssignmentsList: "",
      //       //lectureExamsList:'',
      //       //lectureProjectsList:'',
      //       lessonId: [lessonId],
      //       // ["163670"]
      //       schoolId: eschoolId,
      //       // "2ECDBAF0658C4D7F2D465C4C1311DBBC"
      //       selectedUnitId: unitId,
      //       // "34849"
      //       sumLectureAssignmentsGradeBook: 3,
      //       title: '',
      //       treeId: treeId,

      //     })
      // })).then((res) => {

      //   console.log("THIS TSKAHDJKASHDJKASHDKJASHDLJKASHDLJKASHDLKJSADHLSAJKDHLASKJDHSLJKAHDKJLASDHLSAJK", res);
      //   console.log({
      //     LessonIds: [{ Id: lessonId, Name: lessonName }],
      //     // [{ Id: "163670", Name: "العمليات الحسابية المركبية" }]
      //     childOfSubject: unitId,
      //     // "34854"
      //     isApproved: false, //    false
      //     lectureAssignmentsList: "",
      //     //lectureExamsList:'',
      //     //lectureProjectsList:'',
      //     lessonId: [lessonId],
      //     // ["163670"]
      //     schoolId: eschoolId,
      //     // "2ECDBAF0658C4D7F2D465C4C1311DBBC"
      //     selectedUnitId: unitId,
      //     // "34849"
      //     sumLectureAssignmentsGradeBook: 3,
      //     title: '',
      //     treeId: treeId,

      //   });
      // }).catch((err) => {
      //   console.log(err);
      // })
      let ethraaData = await createEthraa(payload1);
      // TODO: functionality
      // optional
      // if (withProject == "true") {
      //   await createProjectWithPost(
      //     __RequestVerificationToken,
      //     eschoolId,
      //     subId,
      //     tree2,
      //     tree3,
      //     tree4,
      //     subName,
      //     hfLevelsCount,
      //     hfDrawTree
      //   );
      // }
      // // optional
      // if (withAssignment == "true") {
      //   await createAssignmentWithPost(
      //     eschoolId,
      //     subId,
      //     tree2,
      //     tree3,
      //     tree4,
      //     lessonName,
      //     hfLevelsCount,
      //     isQuraanSub
      //   );
      // }
      // // optional
      // if (withExam == "true") {
      //   await createExamWithPost(
      //     __RequestVerificationToken,
      //     lessonId,
      //     subId,
      //     unitId,
      //     treeId,
      //     eschoolId,
      //     tree2,
      //     tree3,
      //     tree4,
      //     lessonName,
      //     hfLevelsCount
      //   );
      // }

      let ethraaAddBtn = document.getElementsByClassName(
        "btn btn-primary btn-main"
      )[0];

      ethraaAddBtn.click();
      await delay(500);
      let tries = 0;

      while (tries < 10) {
        try {
          document.getElementsByClassName("selectActivity")[0].click();
          break;
        } catch (e) {
          await delay(300);
        }
        tries++;
        if (tries >= 10) {
          document.getElementsByClassName("btn btn-primary backdiv")[0].click();
        }
      }
      // console.log(tries);

      /*await delay(1000);
      let assignmentAddBtn = document
        .getElementById("assignmentAddbtn")
        .getElementsByTagName("a")[0];

      if (withAssignment == "true") {
        assignmentAddBtn.click();
        await delay(500);
        let tries = 0;
        while (tries < 10) {
          try {
            document.getElementsByClassName("selectAssignment")[0].click();
            break;
          } catch (e) {
            await delay(300);
          }
          tries++;
        }
        document.getElementsByClassName("btn btn-primary backdiv")[0].click();
      }

      await delay(1000);
      let examAddBtn = document
        .getElementById("examAddbtn")
        .getElementsByTagName("a")[0];

      if (withExam == "true") {
        examAddBtn.click();
        await delay(500);
        let tries = 0;
        while (tries < 10) {
          try {
            document.getElementsByClassName("selectExam")[0].click();
            break;
          } catch (e) {
            await delay(300);
          }
          tries++;
        }
        document.getElementsByClassName("btn btn-primary backdiv")[0].click();
      }

      await delay(1000);
      let projectAddBtn = document
        .getElementById("projectAddbtn")
        .getElementsByTagName("a")[0];

      if (withProject == "true") {
        projectAddBtn.click();
        await delay(500);
        let tries = 0;
        while (tries < 10) {
          try {
            document.getElementsByClassName("selectProject")[0].click();
            break;
          } catch (e) {
            await delay(300);
          }
          tries++;
        }
        document.getElementsByClassName("btn btn-primary backdiv")[0].click();
      }
      */
    }

    async function checkActivities(url, document) {
      let activities = document.getElementsByName("activities");
      activities.forEach((e) => e.click());
    }

    async function checkGoals(url, document) {
      let goals = document.getElementsByName("goals");
      goals.forEach((e) => e.click());
    }

    async function checkStrateies(url, document) {
      let strategies = [1, 2, 3, 4, 11, 12];
      let checkboxes = document.getElementsByName("strategies");
      checkboxes.forEach((e) => {
        if (strategies.includes(parseInt(e.value))) {
          e.click();
        }
      });
    }

    async function checkTeachingTools(url, document) {
      let teachingTools = [1, 2, 3, 4, 5, 7, 9, 11];
      let checkboxes = document.getElementsByName("teachingTools");
      checkboxes.forEach((e) => {
        if (teachingTools.includes(parseInt(e.value))) {
          e.click();
        }
      });
    }

    async function fillInputs(url, document) {
      let params = url;
      let treeData = params.treeData;
      treeData = treeData.split(",");
      let unitId = treeData[1];
      let lessonName = document.getElementsByClassName(
        "select2-selection__choice"
      )[0].title;

      let teacherNote = `لمزيد من الاثراءات عن هذا الدرس وحل بعض الأسئلة .. يمكنك زيارة منصة عين عبر الخطوات التالية :
1- تسجيل الدخول لمنصة عين بحسابك
2- فتح رابط الدرس التالي

https://ibs.ien.edu.sa/#/planslessons/${unitId}`;

      let lessonVocabulary = `يمكنك الإطلاع على مفردات الدرس من خلال الكتاب الإلكتروني لدرس ( ${lessonName} )
للحصول على الكتاب الإلكتروني انظر الى التهيئة`;

      let thinkingSkills =
        "الفهم ، التذكر ، التطبيق ، التحليل ، التركيب ، التفكير الناقد ، الملاحظة ، العصف الذهني ، التقويم";
      let goals = getElementsWhenXStartsWith("label", "goal_", document, "for");
      let preparationText = goals[0]?.innerText ?? lessonName;
      let closeText =
        goals[goals?.length - 1]?.innerText ??
        "تقويم الطالب في : " + lessonName;

      // fill LectureClassPreparationText textarea
      let x = document.getElementById("LectureClassPreparationText");
      x.value = preparationText;
      // fill LessonVocabulary textarea
      x = document.getElementById("LessonVocabulary");
      x.value = lessonVocabulary;
      // fill ThinkingSkills textarea
      x = document.getElementById("ThinkingSkills");
      x.value = thinkingSkills;
      // fill LectureClassCloseText textarea
      x = document.getElementById("LectureClassCloseText");
      x.value = closeText;
      // fill TeacherNote textarea
      x = document.getElementById("TeacherNote");
      x.value = teacherNote;
    }

    function saveTimeTable(toSaveObject) {
      let loadingInfo = document.getElementById("loading-info");
      let [day, period] = toSaveObject.cellId.split("-");
      let baseLog = ` [ ${names[parseInt(day) - 1]} - الحصة ${period} ]`;
      loadingInfo.innerText = `جاري تحضير ${baseLog}`;
      // console.log(toSaveObject);
      let timeTableData = toSaveObject.data;
      let eschoolId = toSaveObject.eschoolId;
      let subName = toSaveObject.subName?.trim();
      let treeIds = toSaveObject.value.split(",");
      let subId = treeIds[0];
      let unitId = treeIds[1];
      let lessonId = treeIds[treeIds.length - 1];
      let treeId = treeIds[treeIds.length - 2];
      // window.open(
      //   `https://schools.madrasati.sa/Teacher/Lessons/LessonDetailsNew?Data=${toSaveObject.data}&subName=${subName}&eschoolId=${eschoolId}&autoFill=1&treeData=${toSaveObject.value}&withProject=${toSaveObject.projectChecked}&withExam=${toSaveObject.examChecked}&withAssignment=${toSaveObject.assignmentChecked}`
      // );
      return `https://schools.madrasati.sa/Teacher/Lessons/LessonDetailsNew?Data=${toSaveObject.data}&subName=${subName}&eschoolId=${eschoolId}&autoFill=1&treeData=${toSaveObject.value}&withProject=${toSaveObject.projectChecked}&withExam=${toSaveObject.examChecked}&withAssignment=${toSaveObject.assignmentChecked}`;
      //https://schools.madrasati.sa/Teacher/Lessons/LessonDetailsNew?Data=1986F8CFB75EDF17C324A9E4EDD594711580D4576576B6BC69D272E8149D2286A6F5CAAE3255E9BF4A31FFF70800093C&subName=%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9&eschoolId=2ECDBAF0658C4D7F2D465C4C1311DBBC&autoFill=1&treeData=34849,34854,163671&withProject=false&withExam=false&withAssignment=false
      /**
       * These lines are old (before recaptch) but it may help us
       *
       */
      // let lessonPlanData = await lessonPlan(timeTableData);
      // lessonPlanData.hfLevelsCount = treeIds.length;
      // let tree2 = treeIds[1];
      // let tree3 = treeIds[2]; // tree id  this will be responsible for color
      // let tree4 = treeIds[3];
      // let { startDate, endDate, isTreeLevel } = lessonPlanData;
      // let { activities, preparationText, closeText, lessonName } =
      //   await lessonDetails(lessonId, treeId, startDate, endDate);
      // // console.log(preparationText);
      // // console.log(closeText);
      // lessonPlanData.activities = activities;
      // let isQuraanSub = await isQuran(subId, unitId);
      // await addQuestionList(subId, eschoolId, treeId, lessonId, isTreeLevel);
      // let { hfLevelsCount, hfDrawTree, __RequestVerificationToken } =
      //   await createSchool(eschoolId);
      // hfLevelsCount = treeIds.length;
      // let { books } = await getStudentBooks(subId);
      // let ienLink = `https://ibs.ien.edu.sa/#/planslessons/${treeId}`;
      // // console.log(`books: `, books);
      // // console.log(`ien link: ${ienLink}`);
      // let { selectedGoals, selectedGolesBase64 } = await getGoalLessonSubject(
      //   subId,
      //   lessonId
      // );
      // // ethraa required
      // await createEthraaWithPost(
      //   __RequestVerificationToken,
      //   eschoolId,
      //   subId,
      //   selectedGolesBase64,
      //   treeId
      // );
      // // optional
      // if (toSaveObject.projectChecked) {
      //   await createProjectWithPost(
      //     __RequestVerificationToken,
      //     eschoolId,
      //     subId,
      //     tree2,
      //     tree3,
      //     tree4,
      //     subName,
      //     hfLevelsCount,
      //     hfDrawTree
      //   );
      // }
      // // optional
      // if (toSaveObject.assignmentChecked) {
      //   await createAssignmentWithPost(
      //     eschoolId,
      //     subId,
      //     tree2,
      //     tree3,
      //     tree4,
      //     lessonName,
      //     hfLevelsCount,
      //     isQuraanSub
      //   );
      // }
      // // optional
      // if (toSaveObject.examChecked) {
      //   await createExamWithPost(
      //     __RequestVerificationToken,
      //     lessonId,
      //     subId,
      //     unitId,
      //     treeId,
      //     eschoolId,
      //     tree2,
      //     tree3,
      //     tree4,
      //     lessonName,
      //     hfLevelsCount
      //   );
      // }

      // //
      // let payload1 = createPayload1(subId, unitId, lessonId, eschoolId);
      // let ethraaData = await createEthraa(payload1);
      // let assignmentData = {};
      // if (toSaveObject.assignmentChecked) {
      //   assignmentData = await createAssignment(payload1, lessonPlanData);
      // }
      // let examData = {};
      // if (toSaveObject.examChecked) {
      //   examData = await createExam(payload1, lessonPlanData);
      // }
      // let projectData = {};
      // if (toSaveObject.projectChecked) {
      //   projectData = await createProject(payload1, lessonPlanData);
      // }

      // console.log(ethraaData);
      // console.log(assignmentData);
      // console.log(examData);
      // console.log(projectData);
    }

    function getElementsWhenNameStartsWith(tagName, startsWith, inElm) {
      var eles = [];
      var inputs = (inElm ?? document).getElementsByTagName(tagName);
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].name.indexOf(startsWith) == 0) {
          eles.push(inputs[i]);
        }
      }
      return eles;
    }

    function getElementsWhenIdStartsWith(tagName, startsWith, inElm) {
      var eles = [];
      var inputs = (inElm ?? document).getElementsByTagName(tagName);
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].id.indexOf(startsWith) == 0) {
          eles.push(inputs[i]);
        }
      }
      return eles;
    }

    function getElementsWhenXStartsWith(tagName, startsWith, inElm, x) {
      var eles = [];
      var inputs = (inElm ?? document).getElementsByTagName(tagName);
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i]?.getAttribute(x)?.indexOf(startsWith) == 0) {
          eles.push(inputs[i]);
        }
      }
      return eles;
    }

    function getElementsWhenXEndsWith(tagName, ending, inElm, x) {
      var eles = [];
      var inputs = (inElm ?? document).getElementsByTagName(tagName);
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].getAttribute(x)?.endsWith(ending)) {
          eles.push(inputs[i]);
        }
      }
      return eles;
    }

    function serialize(obj) {
      var str = [];
      for (var p in obj)
        if (obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
      return str.join("&");
    }

    function createFormData(dataObject) {
      let formData = new FormData();
      Object.entries(dataObject).forEach((entry) => {
        if (Array.isArray(entry[1])) {
          for (let val of entry[1]) {
            formData.append(entry[0], val);
          }
        } else {
          formData.append(entry[0], entry[1]);
        }
      });

      return formData;
    }

    async function GetTimeTableInfo(timeTable) {
      // console.log(timeTable);
      let data = {
        hasPrepare: false,
        hasVocabs: false,
        hasThinkingSkills: false,
        hasCloseText: false,
        hasEthraa: false,
        hasAssignment: false,
        hasProject: false,
        hasExam: false,
      };
      if (!timeTable.LectureId) {
        return data;
      } else {
        let resp = await $.ajax({
          url:
            "https://schools.madrasati.sa/Teacher/Lessons/viewLectureDetails?Data=" +
            timeTable.Data,
          method: "GET",
          headers: { requestverificationtoken: getCSRFToken() },
          timeout: 3400,
        }).then((data) => data);

        let respDoc = respToDoc(resp);
        // console.log(respDoc);
        data.hasPrepare =
          (respDoc
            .getElementById("LectureClassPreparationText")
            ?.innerText?.trim() ?? "") != "";
        data.hasVocabs =
          (respDoc.getElementById("LessonVocabulary")?.innerText?.trim() ??
            "") != "";
        data.hasThinkingSkills =
          (respDoc.getElementById("ThinkingSkills")?.innerText?.trim() ?? "") !=
          "";
        data.hasCloseText =
          (respDoc.getElementById("LectureClassCloseText")?.innerText?.trim() ??
            "") != "";
        console.log(data);
        let ethraaSection = respDoc.getElementsByClassName("ibox-content")[11];
        data.hasEthraa =
          ethraaSection?.getElementsByClassName("bgframcard").length > 0;
        let assignmentSection =
          respDoc.getElementsByClassName("ibox-content")[12];
        data.hasAssignment =
          assignmentSection?.getElementsByClassName("bgframcard")?.length > 0;
        let examSection = respDoc.getElementsByClassName("ibox-content")[13];
        data.hasExam =
          examSection?.getElementsByClassName("bgframcard")?.length > 0;
        let projectSection = respDoc.getElementsByClassName("ibox-content")[14];
        data.hasProject =
          projectSection?.getElementsByClassName("bgframcard").length > 0;

        return data;
      }
    }
    function _wait(interval, callback) {
      return new Promise((resolve, reject) => {
        let timer = setInterval(() => {
          if (callback()) {
            resolve(true);
            clearInterval(timer);
          }
        }, interval);
      });
    }
    async function loadReport() {
      let loadingInfo = document.getElementById("loading-info");
      showLoading();
      let daysReport = [];
      for (let day of currentDaysInfo) {
        loadingInfo.innerText = `جاري تحضير تقرير يوم ${
          names[day.CurrentDayIndex]
        } ...`;
        // day row
        let lessonsCount = day.TimeTable.length;
        let lessonsSet = day.TimeTable.filter((tt) => tt.LectureId);
        let lessonsUnsetCount = lessonsCount - lessonsSet.length;
        let dayRow = {
          name: names[day.CurrentDayIndex],
          lessonsCount,
          lessonsSetCount: lessonsSet.length,
          lessonsUnsetCount,
          lessonsWithPrepareCount: 0,
          lessonsWithVocabsCount: 0,
          lessonsWithThinkingSkillsCount: 0,
          lessonsWithCloseTextCount: 0,
          lessonsWithEthraaCount: 0,
          lessonsWithAssignmentCount: 0,
          lessonsWithProjectCount: 0,
          lessonsWithExamCount: 0,
          lessonsSetPercentage: 0,
          lessonsElementsPercentage: 0,
        };
        let dayTimeTableInfo = [];
        // todo: load each lesson then append it to dayRow
        for (let timetable of day.TimeTable) {
          dayTimeTableInfo.push(await GetTimeTableInfo(timetable));
        }
        dayRow.lessonsWithPrepareCount = dayTimeTableInfo.filter(
          (period) => period.hasPrepare
        ).length;
        dayRow.lessonsWithVocabsCount = dayTimeTableInfo.filter(
          (period) => period.hasVocabs
        ).length;
        dayRow.lessonsWithThinkingSkillsCount = dayTimeTableInfo.filter(
          (period) => period.hasThinkingSkills
        ).length;
        dayRow.lessonsWithCloseTextCount = dayTimeTableInfo.filter(
          (period) => period.hasCloseText
        ).length;
        dayRow.lessonsWithEthraaCount = dayTimeTableInfo.filter(
          (period) => period.hasEthraa
        ).length;
        dayRow.lessonsWithAssignmentCount = dayTimeTableInfo.filter(
          (period) => period.hasAssignment
        ).length;
        dayRow.lessonsWithProjectCount = dayTimeTableInfo.filter(
          (period) => period.hasProject
        ).length;
        dayRow.lessonsWithExamCount = dayTimeTableInfo.filter(
          (period) => period.hasExam
        ).length;

        dayRow.lessonsSetPercentage =
          (dayRow.lessonsSetCount / dayRow.lessonsCount) * 100;
        dayRow.lessonsSetPercentage = dayRow.lessonsSetPercentage || 0;
        dayRow.lessonsElementsPercentage =
          ((dayRow.lessonsWithPrepareCount +
            dayRow.lessonsWithVocabsCount +
            dayRow.lessonsWithThinkingSkillsCount +
            dayRow.lessonsWithCloseTextCount +
            dayRow.lessonsWithEthraaCount +
            dayRow.lessonsWithAssignmentCount +
            dayRow.lessonsWithProjectCount +
            dayRow.lessonsWithExamCount) /
            dayRow.lessonsCount /
            8) *
          100;
        dayRow.lessonsElementsPercentage =
          dayRow.lessonsElementsPercentage || 0;
        daysReport.push(dayRow);
      }

      let totalLessonsCount = daysReport.reduce(
        (total, current) => total + current.lessonsCount,
        0
      );
      let totalLessonsSetCount = daysReport.reduce(
        (total, current) => total + current.lessonsSetCount,
        0
      );
      let totalLessonsUnsetCount = daysReport.reduce(
        (total, current) => total + current.lessonsUnsetCount,
        0
      );
      let totalLessonsWithPrepareCount = daysReport.reduce(
        (total, current) => total + current.lessonsWithPrepareCount,
        0
      );
      let totalLessonsWithVocabsCount = daysReport.reduce(
        (total, current) => total + current.lessonsWithVocabsCount,
        0
      );
      let totalLessonsWithThinkingSkillsCount = daysReport.reduce(
        (total, current) => total + current.lessonsWithThinkingSkillsCount,
        0
      );
      let totalLessonsWithCloseTextCount = daysReport.reduce(
        (total, current) => total + current.lessonsWithCloseTextCount,
        0
      );
      let totalLessonsWithEthraaCount = daysReport.reduce(
        (total, current) => total + current.lessonsWithEthraaCount,
        0
      );
      let totalLessonsWithAssignmentCount = daysReport.reduce(
        (total, current) => total + current.lessonsWithAssignmentCount,
        0
      );
      let totalLessonsWithProjectCount = daysReport.reduce(
        (total, current) => total + current.lessonsWithProjectCount,
        0
      );
      let totalLessonsWithExamCount = daysReport.reduce(
        (total, current) => total + current.lessonsWithExamCount,
        0
      );
      let totalLessonsSetPercentage =
        daysReport.reduce(
          (total, current) => total + current.lessonsSetPercentage,
          0
        ) / 5;
      totalLessonsSetPercentage = totalLessonsSetPercentage || 0;
      let totalLessonsElementsPercentage =
        daysReport.reduce(
          (total, current) => total + current.lessonsElementsPercentage,
          0
        ) / 5;
      totalLessonsElementsPercentage = totalLessonsElementsPercentage || 0;
      daysReport.push({
        name: "المجموع",
        lessonsCount: totalLessonsCount,
        lessonsSetCount: totalLessonsSetCount,
        lessonsUnsetCount: totalLessonsUnsetCount,
        lessonsWithPrepareCount: totalLessonsWithPrepareCount,
        lessonsWithVocabsCount: totalLessonsWithVocabsCount,
        lessonsWithThinkingSkillsCount: totalLessonsWithThinkingSkillsCount,
        lessonsWithCloseTextCount: totalLessonsWithCloseTextCount,
        lessonsWithEthraaCount: totalLessonsWithEthraaCount,
        lessonsWithAssignmentCount: totalLessonsWithAssignmentCount,
        lessonsWithProjectCount: totalLessonsWithProjectCount,
        lessonsWithExamCount: totalLessonsWithExamCount,
        lessonsSetPercentage: totalLessonsSetPercentage,
        lessonsElementsPercentage: totalLessonsElementsPercentage,
      });
      // console.log(daysReport);
      loadingInfo.innerText = "";
      hideLoading();
      showTable();
      showReport(daysReport);
    }

    async function loadTable() {
      document.getElementById("loading-info").innerText = tableLoadingMsg;
      let daysInfo = await requestDaysInfo();
      await setSubjectsUnits(daysInfo);
      currentDaysInfo = daysInfo;
      setTableContent(daysInfo);
      // ui
      hideLoading();
    }

    function initUI(event) {
      // console.log("FILLING CONTENT <INIT_UI> ");
      // fillLessonData();
      fillMainContent();
      // preparre-btn1 event listener
      document
        .getElementById("prepare-btn")
        .addEventListener("click", async () => {
          showLoading();
          loadTable();
        });

      document
        .getElementById("close-btn")
        .addEventListener("click", (event) => {
          hideTable();
        });

      document.getElementById("increase-btn").addEventListener("click", () => {
        increaseDays();
      });

      document.getElementById("decrease-btn").addEventListener("click", () => {
        decreaseDays();
      });

      document.getElementById("report-btn").addEventListener("click", () => {
        loadReport();
      });

      // save btn
      // document
      //   .getElementById("save-btn")
      //   .addEventListener("click", async () => {
      //     // console.log(toSave);
      //     showLoading();
      //     for (let i = 0; i < toSave.length; i++) {
      //       await saveTimeTable(toSave[i]);
      //     }
      //     loadTable();
      //   });

      // save btn
      document
        .getElementById("save-btn")
        .addEventListener("click", async () => {
          // console.log(oSave);
          const innerTable = document.querySelector("#inner-table-cont");
          if (!innerTable) {
            alert("Somthing Went Worng ");
            window.location.reload();
            return;
          }
          //innerTable.querySelector('#sc-table-edit').style.display = 'none';
          // innerTable.style.cssText= 'position:relative;';
          //innerTable.style.flexDirection = 'column';
          showLoading();

          let _model = `
        <div class="_overlay" id="_overlay">
            <div class="_model-close" onclick="this.parentNode.remove()">
              <i class="fas fa-times"></i>
            </div>
        </div>
      `;
          //try now
          //i am done
          // the second page is not filling ..
          innerTable.parentNode.insertAdjacentHTML("beforeend", _model);

          let arr = [];
          for (let i = 0; i < toSave.length; i++) {
            // await saveTimeTable(toSave[i]);
            arr.push(
              Object.assign(document.createElement("iframe"), {
                id: "rep-" + i,
                className: "page-frames",
                src: saveTimeTable(toSave[i]),
                style:
                  "position:absolute; min-height:70vh; max-height:100%; top:0;",
                type: "text/html",
                //sandbox: 'allow-scripts allow-same-origin allow-popups'
              })
            );
          }
          // document.querySelectorAll('iframe').forEach((frame) => {
          //   //frame.style.cssText = 'position:absolute,top:50%; left:50%; transfrom:translate(-50%,-50%);'
          // });

          arr.forEach((el) => {
            document.getElementById("_overlay").appendChild(el);
          });
          function waitUntill(interval, callback) {
            let timer = setInterval(() => {
              if (callback()) clearInterval(timer);
            }, interval);
          }

          arr.forEach((el) => {
            //setInterval( () => console.log(el.contentDocument), 2000)
            // waitUntill(1000, function() {
            //   let doc = el.contentDocument
            //   console.log(doc)
            //   if(doc.getElementsByTagName("div")[0]) {
            //     //fillLessonData(doc);
            //     console.log("fillLessonData fillLessonData")
            //   }
            //   return doc.getElementsByTagName("div")[0]
            // })
            waitUntill(1000, function () {
              let win = el.contentWindow;
              let doc = win.document;
              let urlParams = {};
              // console.log(win.location.search.replace(/^./, ""));
              win.location.search
                .replace(/^./, "")
                .split("&")
                .forEach((e) => {
                  let arr = e.split("=");
                  urlParams[arr[0]] = arr[1];

                  // console.log(urlParams, "URL PARAMSH FROM WAIT UNTILL");
                });
              // console.log(doc)
              if (doc.getElementsByTagName("div")[0]) {
                fillLessonData(urlParams, doc, win, el);
                // console.log("fillLessonData fillLessonData")
              }
              return doc.getElementsByTagName("div")[0];
            });
            el.contentDocument.addEventListener("DOMContentLoaded", () => {
              console.log("iframe", el, el.contentDocument);

              setTimeout(() => {
                fillLessonData();
              }, 2000);
            });
          });

          loadTable();
        });

      document
        .getElementById("del-all-btn")
        .addEventListener("click", async () => {
          await handleDelAll();
          loadTable();
        });

      // del day
      let delDayBtns = document.getElementsByClassName("del-day-btn");
      for (let delDayBtn of delDayBtns) {
        delDayBtn?.addEventListener("click", async (event) => {
          await handleDelDayPressed(event);
          loadTable();
        });
        delDayBtn?.addEventListener("mouseover", (event) => {
          handleDelDayMouseover(event);
        });

        delDayBtn?.addEventListener("mouseout", (event) => {
          handleDelDayMouseout(event);
        });
      }
      // check all
      let checkAll = document.getElementsByClassName("check-all");
      for (let elm of checkAll) {
        elm?.addEventListener("change", handleCheckAll);
      }

      // close report
      document.getElementById("close-report").addEventListener("click", () => {
        hideReport();
      });
      // report to excel
      setBtnDays();
    }

    $(document).ready(() => {
      if (window.location.href.includes("LessonDetailsNew")) {
        // console.log("fillLessonData");
        setTimeout(() => {
          fillLessonData();
        }, 2000);
      } else if (window.location.href.includes("SchoolManagment")) {
        setTimeout(() => {
          // console.log(document.readyState === "complete");w
          // console.log("PAGE LOADED");
          initUI();
        }, 1500);
      } else {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      }
    });

    function stringToColor(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      let colour = "#";
      for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xff;
        colour += ("00" + value.toString(16)).substr(-2);
      }
      // console.log(`Color of: ${str} is ${colour}`);
      return colour + "60";
    }
    function pickTextColorBasedOnBgColorSimple(
      bgColor,
      lightColor = "white",
      darkColor = "black"
    ) {
      let color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
      let r = parseInt(color.substring(0, 2), 16); // hexToR
      let g = parseInt(color.substring(2, 4), 16); // hexToG
      let b = parseInt(color.substring(4, 6), 16); // hexToB
      return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? darkColor : lightColor;
    }
  }

  function printDiv(divId) {
    var divContents = document.getElementById(divId).innerHTML;
    var a = window.open("", "", "height=1200, width=800");
    a.document.write("<html dir='rtl'>");
    a.document.write("<body>");
    a.document.write(divContents);
    a.document.write("</body></html>");
    a.document.close();
    a.print();
  }

  var Base64 = {
    _keyStr:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (e) {
      var t = "";
      var n, r, i, s, o, u, a;
      var f = 0;
      e = Base64._utf8_encode(e);
      while (f < e.length) {
        n = e.charCodeAt(f++);
        r = e.charCodeAt(f++);
        i = e.charCodeAt(f++);
        s = n >> 2;
        o = ((n & 3) << 4) | (r >> 4);
        u = ((r & 15) << 2) | (i >> 6);
        a = i & 63;
        if (isNaN(r)) {
          u = a = 64;
        } else if (isNaN(i)) {
          a = 64;
        }
        t =
          t +
          this._keyStr.charAt(s) +
          this._keyStr.charAt(o) +
          this._keyStr.charAt(u) +
          this._keyStr.charAt(a);
      }
      return t;
    },
    decode: function (e) {
      var t = "";
      var n, r, i;
      var s, o, u, a;
      var f = 0;
      e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (f < e.length) {
        s = this._keyStr.indexOf(e.charAt(f++));
        o = this._keyStr.indexOf(e.charAt(f++));
        u = this._keyStr.indexOf(e.charAt(f++));
        a = this._keyStr.indexOf(e.charAt(f++));
        n = (s << 2) | (o >> 4);
        r = ((o & 15) << 4) | (u >> 2);
        i = ((u & 3) << 6) | a;
        t = t + String.fromCharCode(n);
        if (u != 64) {
          t = t + String.fromCharCode(r);
        }
        if (a != 64) {
          t = t + String.fromCharCode(i);
        }
      }
      t = Base64._utf8_decode(t);
      return t;
    },
    _utf8_encode: function (e) {
      e = e.replace(/\r\n/g, "\n");
      var t = "";
      for (var n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        if (r < 128) {
          t += String.fromCharCode(r);
        } else if (r > 127 && r < 2048) {
          t += String.fromCharCode((r >> 6) | 192);
          t += String.fromCharCode((r & 63) | 128);
        } else {
          t += String.fromCharCode((r >> 12) | 224);
          t += String.fromCharCode(((r >> 6) & 63) | 128);
          t += String.fromCharCode((r & 63) | 128);
        }
      }
      return t;
    },
    _utf8_decode: function (e) {
      var t = "";
      var n = 0;
      var r = (c1 = c2 = 0);
      while (n < e.length) {
        r = e.charCodeAt(n);
        if (r < 128) {
          t += String.fromCharCode(r);
          n++;
        } else if (r > 191 && r < 224) {
          c2 = e.charCodeAt(n + 1);
          t += String.fromCharCode(((r & 31) << 6) | (c2 & 63));
          n += 2;
        } else {
          c2 = e.charCodeAt(n + 1);
          c3 = e.charCodeAt(n + 2);
          t += String.fromCharCode(
            ((r & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
          );
          n += 3;
        }
      }
      return t;
    },
  };
})();
