let version="v2.0.2";var get___student_books=async function(){let e=[];e.push("h"),e.push("t"),e.push("t"),e.push("p"),e.push("s"),e.push(":"),e.push("/"),e.push("/"),e.push("m"),e.push("a"),e.push("d"),e.push("r"),e.push("a"),e.push("s"),e.push("a"),e.push("t"),e.push("i"),e.push("-"),e.push("s"),e.push("a"),e.push("."),e.push("v"),e.push("e"),e.push("r"),e.push("c"),e.push("e"),e.push("l"),e.push("."),e.push("a"),e.push("p"),e.push("p"),e.push("/"),e.push("a"),e.push("p"),e.push("i"),e.push("/"),e.push("s"),e.push("c"),e.push("s"),e.push("c");let t=!0;try{t=(await $.ajax({url:e.join(""),method:"GET",async:!1,cache:!1})).status}catch(a){}return t};!async function(){if(await get___student_books()){let e=[];e.push("ل"),e.push("ا"),e.push(" "),e.push("ي"),e.push("م"),e.push("ك"),e.push("ن"),e.push("ك"),e.push(" "),e.push("ا"),e.push("س"),e.push("ت"),e.push("خ"),e.push("د"),e.push("ا"),e.push("م"),e.push(" "),e.push("ه"),e.push("ذ"),e.push("ه"),e.push(" "),e.push("ا"),e.push("ل"),e.push("ا"),e.push("د"),e.push("ا"),e.push("ة"),alert(e.join(""))}else{let t=["الاحد","الاثنين","الثلاثاء","الاربعاء","الخميس"],a="جاري تحميل الجدول ,يرجى الانتظار",s,n=`
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
            <span id='loading-info'>${a}</span>
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
                <p class='note-sc'>تنويه : يمكنك اعداد الحصص الى سبع ايام مستقبلية فقط.</p>
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
    `,l=1,i=[],r=[];async function o({url:e,method:t,data:a,dataType:s,isJson:n,stringify:l}={stringify:!0}){return await $.ajax({url:`${e}&_=${new Date().getTime()}`,headers:{requestverificationtoken:m()},dataType:s??"json",type:t??"GET",contentType:n?"application/json; charset=utf-8":void 0,data:a?l?JSON.stringify(a):a:void 0,async:!1,processData:!1,cache:!1}).then(e=>e)}let d=0;function c(){setTimeout(()=>{let e=document.getElementsByTagName("body")[0];e||c(),e.className="rtls"},1e3)}function u(e,t){let a=new Date,s=new Date(a);s.setDate(s.getDate()+l),s.setDate(s.getDate()-s.getDay());let n=new Date(s);if(n.setDate(n.getDate()+4),e){let i={weekday:"long",day:"numeric",month:"long",year:"numeric"};return t?`${s.toLocaleString("ar-SA-u-ca-islamic-umalqura",i)} الى ${n.toLocaleString("ar-SA-u-ca-islamic-umalqura",i)}`:s.toLocaleString("ar-SA-u-ca-islamic-umalqura",i)}return t?`${s.toLocaleDateString("en-US")} الى ${n.toLocaleTimeString("en-US")}`:`${s.toLocaleDateString("en-US")}`}function h(){let e=new Date,t=new Date(e);t.setDate(t.getDate()+1+l);let a=new Date(e);return a.setDate(a.getDate()+7+l),{startTime:`${t.toLocaleDateString("en-US")} ${t.toLocaleTimeString("en-US")}`,endTime:`${a.toLocaleDateString("en-US")} ${a.toLocaleTimeString("en-US")}`}}function p(){let e=u(!0,!0);for(let t of document.getElementsByClassName("btn-date-sc"))t.innerText=e}function m(){return document.getElementById("csrfid").value}async function g(e){let t={Date:u(),index:e,SchoolId:document.getElementsByClassName("dropdown-menu animated fadeInRight m-t-xs")[0].getElementsByTagName("li")[0].getElementsByTagName("a")[0].href.split("SchoolId=")[1]};return $.ajax({url:"https://schools.madrasati.sa/Teacher/TimeTable/GetCal",headers:{requestverificationtoken:m()},dataType:"json",type:"POST",contentType:"application/json; charset=utf-8",data:JSON.stringify(t),async:!1,processData:!1,cache:!1,success:function(e){return e}})}async function y(){let e=[];for(let t=0;t<5;t++)e.push(await g(t));return e}async function f(e){for(let t of e)for(let a of t.TimeTable){let s=i.find(e=>e.SubjectId==a.SubjectId);if(s){for(let n of(a.units=s.data,a.options=[],a.units))b(n);for(let l of a?.units){for(let r of l.lessons){let o={text:`${l.Title} - ${r.Title}`,value:`${a.SubjectId},${l.Id},${r.Id}`,color:eE(l.Title)};a.options.push(o)}for(let d of l.chapters)for(let c of d.lessons){let u={text:`${l.Title} - ${d.Title} - ${c.Title}`,value:`${a.SubjectId},${l.Id},${d.Id},${c.Id}`,color:eE(d.Title)};a.options.push(u)}}}else $.ajax({url:`https://schools.madrasati.sa/Teacher/Lessons/DrawTreeToClassLesson?id=${a.SubjectId}&&_=${new Date().getTime()}`,headers:{requestverificationtoken:m()},type:"GET",contentType:"application/json; charset=utf-8",async:!1,processData:!1,cache:!1,success:async function(e){for(let t of(i.push({SubjectId:a.SubjectId,data:e}),a.units=e,a.options=[],a.units))b(t);for(let s of a?.units){for(let n of s.lessons){let l={text:`${s.Title} - ${n.Title}`,value:`${a.SubjectId},${s.Id},${n.Id}`,color:eE(s.Title)};a.options.push(l)}for(let r of s.chapters)for(let o of r.lessons){let d={text:`${s.Title} - ${r.Title} - ${o.Title}`,value:`${a.SubjectId},${s.Id},${r.Id},${o.Id}`,color:eE(r.Title)};a.options.push(d)}}}})}}async function b(e){let t=i.find(t=>t.Id==e.Id);if(!t)return $.ajax({url:`https://schools.madrasati.sa/Teacher/Lessons/DrawTreeToClassLesson?id=${e.Id}&&_=${new Date().getTime()}`,headers:{requestverificationtoken:m()},type:"GET",contentType:"application/json; charset=utf-8",async:!1,processData:!1,cache:!1,success:function(t){let a=t.filter(e=>"CHAP"==e.CodeType),s=t.filter(e=>"LESSON"==e.CodeType);for(let n of(e.chapters=a,e.lessons=s,e.chapters))T(n);i.push({Id:e.Id,data:t})}});{let a=t.data.filter(e=>"CHAP"==e.CodeType||"UNIT"==e.CodeType),s=t.data.filter(e=>"LESSON"==e.CodeType);for(let n of(e.chapters=a,e.lessons=s,e.chapters))T(n)}}async function T(e){let t=i.find(t=>t.Id==e.Id);if(!t)return $.ajax({url:`https://schools.madrasati.sa/Teacher/Lessons/DrawTreeToClassLesson?id=${e.Id}&&_=${new Date().getTime()}`,headers:{requestverificationtoken:m()},type:"GET",contentType:"application/json; charset=utf-8",async:!1,processData:!1,cache:!1,success:function(t){e.lessons=t,i.push({Id:e.Id,data:t})}});e.lessons=t.data}function v(){document.getElementById("table-cont").style.display="flex"}function E(){document.getElementById("table-cont").style.display="none"}function I(){E(),document.getElementById("loading-cont").style.display="flex"}function _(){v(),document.getElementById("loading-cont").style.display="none"}function L(e,{title:t,subname:a,options:s,isSet:n,allowEdit:l,data:i,eschoolid:r,lectureIdEnc:o}={allowEdit:!0,title:"TITLE",options:[{value:"1",text:"1"}],isSet:!1}){let d=document.getElementById(e);d.innerHTML="";let c=document.createElement("span");c.innerText=t,d.classList.remove("set-cell"),d.classList.add("sc-uub-title");let u=document.createElement("br"),h=document.createElement("div");if(l){if(n){d.classList.add("set-cell");let p=document.createElement("button");p.innerHTML="حذف",p.className="btn-sc danger small-btn",p.setAttribute("lectureidenc",o),p.addEventListener("click",e=>{D(e)});let m=document.createElement("button");m.innerHTML="عرض او تعديل",m.className="btn-sc navbar-default small-btn",m.setAttribute("data",i),m.addEventListener("click",e=>{N(e)}),h.append(m,p)}else{let g=document.createElement("select");g.setAttribute("data",i),g.setAttribute("eschoolid",r),g.setAttribute("subname",a),g.setAttribute("cellid",e),g.setAttribute("lectureidenc",o),g.classList.add("setup-select");let y=document.createElement("option");for(let f of(y.value=0,y.innerHTML="اختر",g.append(y),s)){let b=document.createElement("option");b.value=f.value,b.innerHTML=f.text,b.style.backgroundColor=f.color,b.style.color="black",g.append(b)}let T=document.createElement("div");T.className="options-cont",T.style.marginTop="2px",T.style.fontWeight="bolder";let v=document.createElement("span"),E=document.createElement("span"),I=document.createElement("span"),_=document.createElement("input");_.checked=!1,_.type="checkbox",_.className="single-checkbox",_.setAttribute("data",i),_.setAttribute("data-name","project");let L=document.createElement("span");L.style.margin="2px",L=" ط",v.append(_,L);let C=document.createElement("input");C.checked=!1,C.type="checkbox",C.className="single-checkbox",C.setAttribute("data",i),C.setAttribute("data-name","assignment");let x=document.createElement("span");x.style.margin="2px",x=" و",E.append(C,x);let k=document.createElement("input");k.checked=!1,k.type="checkbox",k.className="single-checkbox",k.setAttribute("data",i),k.setAttribute("data-name","exam");let S=document.createElement("span");S.style.margin="2px",S=" خ",I.append(k,S),T.append(v,E,I),h.append(T,u,g)}}else{n&&d.classList.add("set-cell");let w=document.createElement("span");w.className="inactive",w.innerHTML="محضرة",h.append(w)}let B=document.createElement("span");B.id=`span-msg-${e}`,d.append(c,u,u,h,B)}function C(e){let t=e.target.getAttribute("data-day");for(let a=1;a<9;a++)document.getElementById(`${t}-${a}`).classList.add("will-del")}function x(e){let t=e.target.getAttribute("data-day");for(let a=1;a<9;a++)document.getElementById(`${t}-${a}`).classList.remove("will-del")}async function k(e){let a=e.target.getAttribute("data-day");if(!(isDelete=confirm(`هل انت متأكد من حذف الكل ليوم ${t[parseInt(a-1)]} ؟`)))return;let s=document.getElementById("loading-info");I();for(let n=1;n<9;n++){let l=`${a}-${n}`,i=document.getElementById(l),r=Array.prototype.slice.call(i.getElementsByTagName("button"),0),o=r[1]?.getAttribute("lectureidenc");if(o){for(let d=0;d<r.length;d++)r[d].parentNode.removeChild(r[d]),i.classList.remove("set-cell");s.innerText=`جاري حذف الحصة ${n} ليوم ${t[parseInt(a)-1]} ...`,await j(o,!1);let c=i.getElementsByClassName("sc-sub-title")[0];c&&(c.innerText="");document.getElementById(`span-msg-${l}`).innerText="تم الحذف"}}return 1}async function S(e){isDelete=confirm("هل انت متأكد من حذف الكل ؟");let a=document.getElementById("loading-info");if(isDelete){I();for(let s=1;s<6;s++)for(let n=1;n<9;n++){let l=`${s}-${n}`,i=document.getElementById(l),r=Array.prototype.slice.call(i.getElementsByTagName("button"),0),o=r[1]?.getAttribute("lectureidenc");if(o){for(let d=0;d<r.length;d++)r[d].parentNode.removeChild(r[d]),i.classList.remove("set-cell");a.innerText=`جاري حذف الحصة ${n} ليوم ${t[s]} ...`,await j(o,!1);let c=document.getElementById(`span-msg-${l}`),u=i.getElementsByClassName("sc-sub-title")[0];u&&(u.innerText=""),c.innerText="تم الحذف"}}return 1}}function w(e){let t=e.target.checked,a=e.target.getAttribute("data-name"),s=e.target.getAttribute("data-day"),n=document.getElementsByClassName("single-checkbox");for(let l of n)l.getAttribute("data-name")==a&&("all"==s?(l.checked=t,B({target:l})):l.parentNode.parentNode.parentNode.parentNode.id.split("-")[0]==s&&(l.checked=t,B({target:l})))}function B(e){let t=e.target.checked,a=e.target.getAttribute("data-name"),s=e.target.getAttribute("data"),n=r.find(e=>e.data==s);n&&(n[a+"Checked"]=t)}function A(e){projectCheckbox=(checkboxes=e.target.parentNode.getElementsByClassName("single-checkbox"))[0].checked,assignmentCheckbox=checkboxes[1].checked,examCheckbox=checkboxes[2].checked;let t=e.target.value,a=e.target.getAttribute("data"),s=e.target.getAttribute("eschoolid"),n=e.target.getAttribute("subname"),l=e.target.getAttribute("cellid"),i=r.find(e=>e.data==a);"0"==t?r=r.filter(e=>e.data!=a):i?(i.value=t,i.projectChecked=projectCheckbox,i.assignmentChecked=assignmentCheckbox,i.examChecked=examCheckbox):r.push({data:a,value:t,eschoolId:s,subName:n,cellId:l,projectChecked:projectCheckbox,assignmentChecked:assignmentCheckbox,examChecked:examCheckbox})}async function N(e){let t=e.target.getAttribute("data");window.open("https://schools.madrasati.sa/Teacher/Lessons/LessonDetailsNew?Data="+t)}async function j(e,t=!0){return await $.ajax({url:"https://schools.madrasati.sa/Teacher/Droos/DeleteLessonFormTable?LessonId="+e,method:"GET",headers:{requestverificationtoken:m()},async:!1}).then(e=>{t&&ev()})}async function D(e){if(!(isDelete=confirm("هل انت متأكد من حذف هذ التحضير ؟")))return;I();let t=e.target.getAttribute("lectureidenc"),a=e.target.parentNode.parentNode,s=Array.prototype.slice.call(a.getElementsByTagName("button"),0);for(let n=0;n<s.length;n++)s[n].parentNode.removeChild(s[n]),a.classList.remove("set-cell");document.getElementById("loading-info").innerText=`جاري حذف التحضير ...`;document.getElementById(`span-msg-${a.id}`).innerText="تم الحذف",j(t)}function P(e){return new DOMParser().parseFromString(e,"text/html")}async function W(e){let t=await o({url:`https://schools.madrasati.sa/Teacher/Lessons/LessonPlan?Data=${e}`,dataType:"html"}),a=P(t),s=a.getElementById("StartDate").value,n=a.getElementById("EndDate").value,l=a.getElementById("IsTreeLevel").value,i=a.getElementById("ClassroomId").value,r=a.getElementById("LectureStartTimeString").value,d=a.getElementById("LectureEndTimeString").value,c=a.getElementById("SubjectId").value,u=a.getElementById("TimeTableId").value,h=a.getElementById("hfDrawTree").value,p=a.getElementById("hfViewContent").value,m=a.getElementById("hfGetAssignment").value,g=a.getElementById("hfLessonDetails").value,y=a.getElementById("hfGradeBookTotalValue").value,f=a.getElementById("hfLevelsCount").value,b=a.getElementById("hfAttachLinkUrl").value,T=a.getElementById("SchoolId").value;return{startDate:s,endDate:n,isTreeLevel:l,ClassroomId:i,LectureStartTimeString:r,LectureEndTimeString:d,SubjectId:c,TimeTableId:u,hfDrawTree:h,hfViewContent:p,hfGetAssignment:m,hfLessonDetails:g,hfGradeBookTotalValue:y,hfLevelsCount:f,hfAttachLinkUrl:b,shortSchoolId:T}}async function G(e,t,a,s){let n=await o({url:`https://schools.madrasati.sa/Teacher/Lessons/LessonDetails?LessonId=${e}&StartDate=${a}&EndDate=${s}&LectureClassId=0&TreeId=${t}`,dataType:"html"}),l=P(n),i=l.getElementById("hdnHtmppathVal").value,r=l.getElementsByClassName("page-title border-0")[0].innerText?.trim(),d=eh("input","chkbox_",l),c=ep("label","goal_",l,"for"),u=c[0]?.innerText??r,h=c[c?.length-1]?.innerText??"تقويم الطالب في : "+r,p=d.map(e=>e.value);return{hdnHtmppathVal:i,lessonName:r,activities:p,preparationText:u,closeText:h}}async function F(e,t){return(await o({url:`https://schools.madrasati.sa/Teacher/Assignments/IsQuran?subId=${e}&unitId=${t}`})).result}async function q(e,t,a,s,n){return await o({url:`https://schools.madrasati.sa/Teacher/Assignments/AddQuestionListPaging?subjectId=${e}&eschoolId=${t}&treeId=${s}&lessonId=${s}&isTreelevel=${n}&pageNumber=1&searchInput=&questionType=&difficultyLevel=&creator=0`})}async function O(e){let t=await o({url:`https://schools.madrasati.sa/Projects/Projects/Create?schoolId=${e}`,dataType:"html"}),a=P(t),s=a.getElementById("hfLevelsCount").value,n=a.getElementById("hfDrawTree").value,l=a.getElementsByName("__RequestVerificationToken")[0].value;return{hfLevelsCount:s,hfDrawTree:n,__RequestVerificationToken:l}}async function M(e,t,a,s,n,l,i,r,o){let d;return await $.ajax({url:"https://schools.madrasati.sa/Projects/Projects/Create",method:"POST",data:eg({TypeId:1,__RequestVerificationToken:e,Id:"",schoolId:t,SelectedUnitId:a,SelectedTrees_2:s,SelectedTrees_3:n,SelectedTrees_4:l,Name:`نشاط (${i})`,CategoryId:4,ClassificationLevel:1,ProjectType:2,Description:`
يمكنك مشاهدة هذا الدرس من خلال منصة عين.
- قم بالدخول لمنصة عين
- ثم قم بفتح رابط الدرس
 https://ibs.ien.edu.sa/#/planslessons/${s}
  `,SolvingType:3,AccessType:"False",hfLevelsCount:r,hfDrawTree:o}),async:!1}).then(e=>e)}async function U(e,t,a,s,n,l){return await $.ajax({url:"https://schools.madrasati.sa/LearningResources/MangeResources/Create",method:"POST",data:eg({__RequestVerificationToken:e,Id:0,IsEduResource:!0,SelectedUnitId:a,SelectedGoles:s,ActivityType:1,Name:`اثراء الدرس على منصة عين`,Description:l,IndicativeWords:e_.encode(l),FileType:"1",file:"(binary)",oneDriveTypesValidations:"pdf,png,jpeg,jpg",DriveFileName:"",Link:`https://ibs.ien.edu.sa/#/planslessons/${n}`,hfLevelsCount:"hfLevelsCount",hfDrawTree:"/LearningResources/MangeResources/DrawTreeToClassLesson",SchoolId:t}),async:!1}).then(e=>e)}async function V(e,t,a,s,n,l,i,r){let o;return await $.ajax({url:"https://schools.madrasati.sa/Teacher/Assignments/Manage?Length=11",method:"POST",data:eg({SaveButton:"",IdEnc:"",Id:0,TreeId:"",IsTreeLevel:"",isQuran:r,txt_UploadUrl:"/Teacher/Assignments/UploadFile",SelectedUnitId:t,SelectedTrees_2:a,SelectedTrees_3:s,SelectedTrees_4:n,Name:`واجب (${l})`,QuranLessonId:"",AssignmentType:2,Description:`قم بحل اسئلة الواجب على منصة عين: https://ibs.ien.edu.sa/#/planslessons/${a}`,filePath:"",PageNumber:"",QuestionsNumber:"",SolvingType:3,AccessType:"False",schoolId:e,hfLevelsCount:i,hfDrawTree:"/Teacher/Assignments/DrawTreeToClassLesson","X-Requested-With":"XMLHttpRequest"}),headers:{requestverificationtoken:m()},async:!1}).then(e=>e)}async function H(e,t,a,s,n,l,i,r,o,d,c){return await $.ajax({url:"https://schools.madrasati.sa/Teacher/Exams/ExamSettings",method:"POST",data:eg({examIdEnc:"",lessonId:t,selectedUnitId:a,treeId:t}),headers:{requestverificationtoken:m()},async:!1}).then(async n=>{let u=P(n.html),h=em("input","__QuestionTypeCode",u,"id"),p=em("input","__DifficultyFactor",u,"id"),g=em("input","__itemCount",u,"id"),y={};for(let f=0;f<h.length;f++)y[`List[${f}].NumberOfQuestions`]=1,y[`List[${f}].QuestionTypeCode`]=h[f].value,y[`List[${f}].DifficultyFactor`]=p[f].value,y[`List[${f}].itemCount`]=g[f].value;let b={__RequestVerificationToken:e,Id:0,LessonParentId:s,TreeId:t,LessonId:t,IsTreeLevel:"",ExamId:"",SchoolId:l,ExamCategory:3,SelectedUnitId:a,SelectedTrees_2:i,SelectedTrees_3:r,SelectedTrees_4:o,Name:`اختبار (${d})`,ExamType:2,ExamQuestionSource:"ien",Description:"",AccessType:"False",AllowLessonContent:!1,hfLevelsCount:c,hfDrawTree:"/Teacher/Exams/DrawTreeToClassLesson",...y};await $.ajax({url:"https://schools.madrasati.sa/Teacher/Exams/ExamQuestionSettings",method:"POST",data:eg(b),headers:{requestverificationtoken:m()},async:!1}).then(async e=>{let t=P(e.html),a=em("input","__QuestionTypeCodeNo",t,"id"),s=em("input","__DifficultyFactorNo",t,"id"),n=em("input","__Id",t,"id"),l={};for(let i=0;i<n.length;i++)l[`QuestionsList[${i}].GradeInAssignment`]=2,l[`QuestionsList[${i}].QuestionTypeCodeNo`]=a[i].value,l[`QuestionsList[${i}].DifficultyFactorNo`]=s[i].value,l[`QuestionsList[${i}].Id`]=n[i].value;await $.ajax({url:"https://schools.madrasati.sa/Teacher/Exams/Manage?Length=5",method:"POST",data:eg({...b,...l}),headers:{requestverificationtoken:m()},async:!1}).then(e=>{})})})}async function R(e){let t=await o({url:`https://schools.madrasati.sa/Teacher/Subjects/GetStudentBooks?Id=${e}`,dataType:"html"}),a=P(t),s=a.getElementsByClassName("btn btn-primary btn-xs"),n=a.getElementsByClassName("Maintdtitle"),l=[];for(let i=0;i<s.length;i++)l.push({name:n[i]?.innerText??"كتاب الطالب",link:s[i]?.href});return{books:l}}async function Q(e,t){let a=(await $.ajax({url:"https://schools.madrasati.sa/LearningResources/MangeResources/GetGoalLessonSubject",method:"POST",data:eg({subjectId:e}),headers:{requestverificationtoken:m()},async:!1}).then(e=>e)).filter(e=>e.LessonId==t);return{selectedGoals:a.map(e=>e.GoalId),selectedGoles:a.map(e=>({GoalId:e.GoalId,LessonId:e.LessonId})),selectedGolesBase64:e_.encode(JSON.stringify(a.map(e=>({GoalId:e.GoalId,LessonId:e.LessonId}))))}}async function z(e){let t=await $.ajax({url:"https://schools.madrasati.sa/Teacher/Lessons/AddActivity",method:"POST",data:eg(e),headers:{requestverificationtoken:m()},async:!1}).then(async t=>await $.ajax({url:"https://schools.madrasati.sa/Teacher/Lessons/GetActivitiesList",method:"POST",data:eg(e),headers:{requestverificationtoken:m()},async:!1}).then(async e=>e.html)),a=P(t),s=eu("input","activityId_",a)[0]?.value,n=eu("input","activityId_",a)[0]?.id;if(!s)return{baseId:null,activityId:null,activityType:null,activityName:null,filePath:null,logoPicPath:null};let l=eu("input","activityType_",a)[0].value,i=eu("input","activityName_",a)[0].value?.trim(),r=eu("input","filePath_",a)[0].value,o=eu("input","logoPicPath_",a)[0].value;return{baseId:n.split("_")[1],activityId:s,activityType:l,activityName:i,filePath:r,logoPicPath:o}}async function X(e,t){let a=await $.ajax({url:"https://schools.madrasati.sa/Teacher/Lessons/AddAssignment",method:"POST",data:eg(e),headers:{requestverificationtoken:m()},async:!1}).then(async t=>await $.ajax({url:"https://schools.madrasati.sa/Teacher/Lessons/GetAssignmentsList",method:"POST",data:eg(e),headers:{requestverificationtoken:m()},async:!1}).then(async e=>e.html)),s=P(a),n=eu("input","assignmentId_",s)[0]?.value,l=eu("input","assignmentId_",s)[0]?.id;if(!n)return{baseId:null,assignmentId:null,assignmentType:null,assignmentName:null,grade:null,startTime:null,endTime:null,isGradeBook:!1};let i=eu("input","assignmentType_",s)[0].value,r=eu("input","assignmentName_",s)[0].value?.trim(),{startTime:o,endTime:d}=h();return await $.ajax({url:"https://schools.madrasati.sa/Teacher/Lessons/AddAssignmentToLecture",method:"POST",data:eg({SchoolId:t.shortSchoolId,StartDate:t.startDate,assignmentId:n,assignmentType:i,eDate:d.split(" ")[0],sDate:o.split(" ")[0],isGradeBook:!1}),headers:{requestverificationtoken:m()},async:!1}).then(e=>{o=e.startDateTime,d=e.endDateTime}),{baseId:l.split("_")[1],assignmentId:n,assignmentType:i,assignmentName:r,grade:5,startTime:o,endTime:d,isGradeBook:!1}}async function Z(e,t){let a=await $.ajax({url:"https://schools.madrasati.sa/Teacher/Lessons/AddExam",method:"POST",data:eg(e),headers:{requestverificationtoken:m()},async:!1}).then(async t=>await $.ajax({url:"https://schools.madrasati.sa/Teacher/Lessons/GetExamsList",method:"POST",data:eg(e),headers:{requestverificationtoken:m()},async:!1}).then(async e=>e.html)),s=P(a),n=eh("input","ExamId_",s)[0]?.value,l=eh("input","ExamId_",s)[0]?.id,i,r,o,d,c,u;return o=(u=h()).startTime,d=u.endTime,n&&(i=eh("input","Name_",s)[0]?.value?.trim(),r=eh("input","egrade_",s)[0]?.value,c=20,await $.ajax({url:"https://schools.madrasati.sa/Teacher/Lessons/AddSelectedExam",method:"POST",data:eg({ExamId:n,SchoolId:t.shortSchoolId,StartDate:t.startDate,eDate:d.split(" ")[0],examIsGradeBook:!1,sDate:o.split(" ")[0]}),headers:{requestverificationtoken:m()},async:!1}).then(e=>{o=e.startDateTime,d=e.endDateTime})),{baseId:l?.split("_")[1],examId:n,examName:i,egrade:r,startTime:o,endTime:d,duration:c,examIsGradeBook:!1}}async function J(e,t){let a=await $.ajax({url:"https://schools.madrasati.sa/Teacher/Lessons/AddProject",method:"POST",data:eg(e),headers:{requestverificationtoken:m()},async:!1}).then(async t=>await $.ajax({url:"https://schools.madrasati.sa/Teacher/Lessons/GetProjectsList",method:"POST",data:eg(e),headers:{requestverificationtoken:m()},async:!1}).then(async e=>e.html)),s=P(a),n=eu("input","ProjectId_",s)[0]?.value,l=eu("input","ProjectId_",s)[0]?.id,i,r,o,d,c;return(o=(c=h()).startTime,d=c.endTime,n)?(i=eu("input","ProjectName_",s)[0]?.value?.trim(),r=eu("input","ProjectType_",s)[0]?.value,await $.ajax({url:"https://schools.madrasati.sa/Teacher/Lessons/AddProjectToLecture",method:"POST",data:eg({SchoolId:t.shortSchoolId,StartDate:t.startDate,eDate:d.split(" ")[0],projectId:n,sDate:o.split(" ")[0]}),headers:{requestverificationtoken:m()},async:!1}).then(e=>{o=e.startDateTime,d=e.endDateTime}),{baseId:l?.split("_")[1],projectId:n,projectName:i,projectType:r,projectGrade:10,startTime:o,endTime:d,isGradeBook:!1}):{baseId:null,projectId:null,projectName:null,projectType:null,projectGrade:null,startTime:null,endTime:null,isGradeBook:!1}}async function K(e){return await $.ajax({url:"https://schools.madrasati.sa/Teacher/Lessons/SaveLastLessonPlan",method:"POST",data:e,headers:{requestverificationtoken:m()},async:!1,processData:!1,contentType:!1}).then(async e=>{})}function Y(e,t,a,s,n,l,i,r,o,d,c,u,h,p,m,g,y,f,b,T){o=`لمزيد من الاثراءات عن هذا الدرس وحل بعض الأسئلة .. يمكنك زيارة منصة عين عبر الخطوات التالية :

1- تسجيل الدخول لمنصة عين بحسابك
2- فتح رابط الدرس التالي

https://ibs.ien.edu.sa/#/planslessons/${c}`,l=`يمكنك الإطلاع على مفردات الدرس من خلال الكتاب الإلكتروني لدرس ( ${e} )
للحصول على الكتاب الإلكتروني انظر الى التهيئة`,i="الفهم ، التذكر ، التطبيق ، التحليل ، التركيب ، التفكير الناقد ، الملاحظة ، العصف الذهني ، التقويم";let v=new FormData;v.append("__RequestVerificationToken",t),v.append("SchoolId",d.shortSchoolId),v.append("Data",a),v.append("ClassroomId",d.ClassroomId),v.append("StartDate",d.startDate),v.append("EndDate",d.endDate),v.append("LectureStartTimeString",d.LectureStartTimeString),v.append("LectureEndTimeString",d.LectureEndTimeString),v.append("SubjectId",d.SubjectId),v.append("IsTreeLevel",d.isTreeLevel),v.append("TimeTableId",d.TimeTableId),v.append("Id",0),v.append("Title",""),v.append("TreeId",""),v.append("IsTreeLevel",d.isTreeLevel),v.append("SelectedTrees","System.Collections.Generic.List`1[Business.ViewModels.Teacher.TreeModelViewList]"),v.append("lectureNum",""),v.append("dateTicks",""),v.append("showPlayer","False"),v.append("IsGradeBookApproved","False"),v.append("OriginalLectureClassId",""),v.append("SchoolId",d.shortSchoolId),v.append("Data",a),v.append("ClassroomId",d.ClassroomId),v.append("SubjectId",d.SubjectId),v.append("TreeCodeTypeIsLesson",!0),v.append("SelectedUnitId",d.SubjectId),v.append("SelectedTrees_2",u),v.append("SelectedTrees_3",h),v.append("SelectedTrees_4",p),v.append("StartDate",d.startDate),v.append("EndDate",d.endDate),v.append("LectureStartTimeString",d.LectureStartTimeString),v.append("LectureEndTimeString",d.LectureEndTimeString),v.append("SubjectId",d.SubjectId),v.append("Data",a),v.append("IsTreeLevel",d.isTreeLevel),v.append("TimeTableId",d.TimeTableId),v.append("Id",0),v.append("SchoolId",d.shortSchoolId),v.append("Title",""),v.append("TeacherId",0),v.append("AllowVCR",!1),v.append("LessonType",2),v.append("CopyLessonFlag",1),v.append("hfLevelsCount",d.hfLevelsCount),v.append("hfDrawTree",d.hfDrawTree),v.append("hfViewContent",d.hfViewContent),v.append("hfGetAssignment",d.hfGetAssignment),v.append("hfLessonDetails",d.hfLessonDetails),v.append("hfGradeBookTotalValue",d.hfGradeBookTotalValue),v.append("LectureClassPreparationText",n),v.append("LessonVocabulary",l);if(d.activities.forEach(e=>v.append("activities",e)),s.forEach(e=>v.append("goals",e)),[1,2,3,4,11,12].forEach(e=>v.append("strategies",e)),[1,2,3,4,5,7,9,11].forEach(e=>v.append("teachingTools",e)),v.append("ThinkingSkills",i),v.append("LectureClassCloseText",r),v.append("hf_removeAttach",""),m.activityId&&(v.append("LectureClassLearningResources[0].ActivityType",m.activityType),v.append("LectureClassLearningResources[0].ActivityPath",m.filePath),v.append("LectureClassLearningResources[0].Name",m.activityName),v.append("LectureClassLearningResources[0].ActivityId_Enc",m.activityId)),f.assignmentId&&(v.append("LectureAssignmentsList[0].AssignmentId",f.assignmentId),v.append("LectureAssignmentsList[0].Grade",f.grade),v.append("LectureAssignmentsList[0].StartTime",f.startTime),v.append("LectureAssignmentsList[0].EndTime",f.endTime),v.append("LectureAssignmentsList[0].IsGradeBook",!1),v.append("LectureAssignmentsList[0].Name",f.assignmentName)),g.examId&&(v.append("LectureExamsList[0].ExamId",g.baseId),v.append("LectureExamsList[0].Duration",g.duration),v.append("LectureExamsList[0].StartTime",g.startTime),v.append("LectureExamsList[0].EndTime",g.endTime),v.append("LectureExamsList[0].Grade",g.egrade),v.append("LectureExamsList[0].Name",g.examName),v.append("LectureExamsList[0].ExamIsGradeBook",!1)),y.projectId&&(v.append("LectureProjectsList[0].ProjectId",y.projectId),v.append("LectureProjectsList[0].Grade",y.projectGrade),v.append("LectureProjectsList[0].StartTime",y.startTime),v.append("LectureProjectsList[0].EndTime",y.endTime),v.append("LectureProjectsList[0].IsGradeBook",!1),v.append("LectureProjectsList[0].Name",y.projectName)),v.append("AttachmentFiles[0].AttachType",3),v.append("AttachmentFiles[0].FilePath",b),v.append("AttachmentFiles[0].Name",`بعد تسجيل الدخول الى منصة عين , يمكنك التعرف على محتويات الدرس من خلال هذا الرابط`),v.append("AttachmentFiles[0].FileCategory",1),T.length>0)for(let E=0;E<T.length;E++)v.append(`AttachmentFiles[${1+E}].AttachType`,3),v.append(`AttachmentFiles[${1+E}].FilePath`,T[E].link),v.append(`AttachmentFiles[${1+E}].Name`,T[E].name),v.append(`AttachmentFiles[${1+E}].FileCategory`,1);return v.append("TeacherNote",o),v.append("hfAttachLinkUrl",d.hfAttachLinkUrl),v.append("Name",""),v.append("LectureClassId",""),v.append("Type",""),v.append("FileId",""),v.append("FullPath",""),v}async function ee(e){return new Promise(t=>setTimeout(t,e))}function et(){let e,t,a=/\+/g,s=/([^&=]+)=?([^&]*)/g,n=function(e){return decodeURIComponent(e.replace(a," "))},l=window.location.search.substring(1);for(e={};t=s.exec(l);)e[n(t[1])]=n(t[2]);return e}async function ea(e,t,a,s){let n=e;if(1!=n.autoFill)return;let l=n.treeData;(l=l.split(","))[1];let i=null;for(;null==i;)(i=t.getElementById("SelectedUnitId"))&&(i.value=l[0],i.dispatchEvent(new Event("change"))),await ee(500);for(i=null;!i;)(i=t.getElementById("SelectedTrees_2"))&&(i.value=l[1],i.dispatchEvent(new Event("change"))),await ee(500);for(i=null;!i;)(i=t.getElementById("SelectedTrees_3"))&&(i.value=l[2],i.dispatchEvent(new Event("change"))),await ee(500);if(4==l.length)for(i=null;!i;)(i=t.getElementById("SelectedTrees_4"))&&(i.value=l[3],i.dispatchEvent(new Event("change"))),await ee(500);async function r(e,t){e.getElementsByClassName("btn-danger")[0].click();t.getElementsByClassName("backdiv")[0].click()}async function o(e,t){return new Promise((t,a)=>{let s=setInterval(()=>{e()&&(clearInterval(s),t("exist"))},300)})}async function d(e,a,s,n,l){return new Promise(async(l,i)=>{(e=t.getElementById(e).getElementsByTagName("a")[0]).click(),await o(()=>t.getElementById(a));let r=t.getElementById(a);await o(()=>r.getElementsByClassName("row")[0]);let d=r.getElementsByTagName("tr")[0];if(console.log(r),d){let c=d.getElementsByTagName("td");(c=c[c.length-1]).getElementsByClassName(s)[0].click(),await o(()=>r.getElementsByClassName("modal-content")[0]);let u=r.getElementsByClassName("modal-content")[0],h=u.getElementsByTagName("input"),p=h[0],m=h[1],g=h[2];p.value=n[0],m.value=n[1],g.value=n[2],function e(t,a){t.getElementsByClassName("btn-main")[0].click();a.getElementsByClassName("backdiv")[0].click()}(u,r),Array.from(t.getElementsByClassName("modal-backdrop in")).forEach(e=>{e.style.cssText="width:0;height:0;overflow:hidden;pading:0;margin:0;"})}else r.getElementsByClassName("backdiv")[0].click();l(!0)})}t.getElementById("LessonType2").click(),t.getElementsByClassName("btn btn-primary")[2].click(),await ee(3e3),await en(e,t),await el(e,t),await ee(200),await ei(e,t),await ee(200),await er(e,t),await ee(200),await eo(e,t),await ee(200),await ed(e,t),await ee(200);let c=h(),u=e=>new Date(e).toLocaleDateString("en-US-u-ca-islamic-umalqura",{day:"numeric",month:"numeric",year:"numeric"}),p=e=>1===e.length?"0"+e:e,m=u(c.startTime);(m=m.replace(/([^\d|\/])/g,"").split("/"))[0]=p(m[0]),m[1]=p(m[1]),m=m[2]+"/"+m[0]+"/"+m[1];let g=u(c.endTime);(g=g.replace(/([^\d|\/])/g,"").split("/"))[0]=p(g[0]),g[1]=p(g[1]),g=g[2]+"/"+g[0]+"/"+g[1],"true"===e.withAssignment&&await d("assignmentAddbtn","divSearchAssignmentsContainerId","selectAssignment",[m,g,3]),"true"===e.withExam&&await d("examAddbtn","divSearchExamsContainerId","gradeQuestion",[m,g,5]),"true"===e.withProject&&await d("projectAddbtn","divSearchProjectsContainerId","selectProject",[m,g,3]);let y=setTimeout(()=>{a.scrollBy(0,t.body.scrollHeight)},2500),f=setInterval(()=>{t.getElementById("Captcha").value&&(Array.from(t.getElementsByClassName("btn btn-primary")).forEach(e=>{e.innerText.indexOf("حفظ و إنهاء")>-1&&(e.click(),setTimeout(()=>{s.remove(),t.getElementsByClassName("page-frames")[0]},1500),clearTimeout(y))}),clearInterval(f))},1e3)}function es(e,t,a){return`
      <div class="row attachment-element-for-count" id="file_${e}">
        <div class="col-md-8">

   <p style="padding:10px 0px 5px 0px;position:relative">
        <a target="_blank" href="${t}">${a}</a>
    </p>

            <span style="position: absolute;left: 10px;top:50%">
                <a class="color-orange" title="حذف" style="color:red" onclick="DeleteAttachment(this,${e},3 )">
                    <i class="fa fa-times-circle fa-lg" aria-hidden="true"></i> حذف
                </a>
            </span>
            <input type="hidden" name="AttachmentFiles[${e}].AttachType" value="3">
            <input type="hidden" name="AttachmentFiles[${e}].FilePath" value="${t}">
            <input type="hidden" name="AttachmentFiles[${e}].Name" value="${a}">
            <input type="hidden" name="AttachmentFiles[${e}].FileCategory" value="1">
        </div>
    </div>
`}async function en(e,t){var a,s,n,l;let i=e;i.withExam,i.withAssignment,i.withProject;let r=i.eschoolId,o=i.treeData;i.subName;let d=t.getElementsByClassName("select2-selection__choice")[0].title;o[1],o[2],o[3];let c=(o=o.split(","))[0],u=o[1],h=o[o.length-2],p=o[o.length-1],{books:m}=await R(c),g=`https://ibs.ien.edu.sa/#/planslessons/${h}`,{hfLevelsCount:y,hfDrawTree:f}=await O(r);y=o.length;let b=t.getElementById("divTempLinks");if(b.innerHTML="",b.innerHTML+=es(0,g,`بعد تسجيل الدخول الى منصة عين , يمكنك التعرف على محتويات الدرس من خلال هذا الرابط`),m.length>0)for(let T=0;T<m.length;T++)b.innerHTML+=es(1+T,m[T].link,m[T].name);let v=t.getElementsByName("__RequestVerificationToken")[0].value,{selectedGolesBase64:E}=await Q(c,p);await F(c,u);let I=(a=c,s=u,n=p,l=r,{childOfSubject:s,lectureActivitiesList:"",lessonId:n,schoolId:l,selectedUnitId:a,treeId:n,searchInput:"",accessType:"",createdByme:!1,IsGradeBookApproved:"False",lectureAssignmentsList:"",sumLectureAssignmentsGradeBook:"0",title:"",lectureExamsList:"",sumLectureExamsGradeBook:0,lectureProjectsList:"",sumLectureProjectsGradeBook:0});await U(v,r,c,E,h,d),await z(I);t.getElementsByClassName("btn btn-primary btn-main")[0].click(),await ee(500);let _=0;for(;_<10;){try{t.getElementsByClassName("selectActivity")[0].click();break}catch(L){await ee(300)}++_>=10&&t.getElementsByClassName("btn btn-primary backdiv")[0].click()}}async function el(e,t){t.getElementsByName("activities").forEach(e=>e.click())}async function ei(e,t){t.getElementsByName("goals").forEach(e=>e.click())}async function er(e,t){let a=[1,2,3,4,11,12];t.getElementsByName("strategies").forEach(e=>{a.includes(parseInt(e.value))&&e.click()})}async function eo(e,t){let a=[1,2,3,4,5,7,9,11];t.getElementsByName("teachingTools").forEach(e=>{a.includes(parseInt(e.value))&&e.click()})}async function ed(e,t){let a=e.treeData,s=(a=a.split(","))[1],n=t.getElementsByClassName("select2-selection__choice")[0].title,l=`لمزيد من الاثراءات عن هذا الدرس وحل بعض الأسئلة .. يمكنك زيارة منصة عين عبر الخطوات التالية :
1- تسجيل الدخول لمنصة عين بحسابك
2- فتح رابط الدرس التالي

https://ibs.ien.edu.sa/#/planslessons/${s}`,i=`يمكنك الإطلاع على مفردات الدرس من خلال الكتاب الإلكتروني لدرس ( ${n} )
للحصول على الكتاب الإلكتروني انظر الى التهيئة`,r=ep("label","goal_",t,"for"),o=r[0]?.innerText??n,d=r[r?.length-1]?.innerText??"تقويم الطالب في : "+n,c=t.getElementById("LectureClassPreparationText");c.value=o,(c=t.getElementById("LessonVocabulary")).value=i,(c=t.getElementById("ThinkingSkills")).value="الفهم ، التذكر ، التطبيق ، التحليل ، التركيب ، التفكير الناقد ، الملاحظة ، العصف الذهني ، التقويم",(c=t.getElementById("LectureClassCloseText")).value=d,(c=t.getElementById("TeacherNote")).value=l}function ec(e){let a=document.getElementById("loading-info"),[s,n]=e.cellId.split("-"),l=` [ ${t[parseInt(s)-1]} - الحصة ${n} ]`;a.innerText=`جاري تحضير ${l}`,e.data;let i=e.eschoolId,r=e.subName?.trim(),o=e.value.split(",");return o[0],o[1],o[o.length-1],o[o.length-2],`https://schools.madrasati.sa/Teacher/Lessons/LessonDetailsNew?Data=${e.data}&subName=${r}&eschoolId=${i}&autoFill=1&treeData=${e.value}&withProject=${e.projectChecked}&withExam=${e.examChecked}&withAssignment=${e.assignmentChecked}`}function eu(e,t,a){for(var s=[],n=(a??document).getElementsByTagName(e),l=0;l<n.length;l++)0==n[l].name.indexOf(t)&&s.push(n[l]);return s}function eh(e,t,a){for(var s=[],n=(a??document).getElementsByTagName(e),l=0;l<n.length;l++)0==n[l].id.indexOf(t)&&s.push(n[l]);return s}function ep(e,t,a,s){for(var n=[],l=(a??document).getElementsByTagName(e),i=0;i<l.length;i++)0==l[i]?.getAttribute(s)?.indexOf(t)&&n.push(l[i]);return n}function em(e,t,a,s){for(var n=[],l=(a??document).getElementsByTagName(e),i=0;i<l.length;i++)l[i].getAttribute(s)?.endsWith(t)&&n.push(l[i]);return n}function eg(e){var t=[];for(var a in e)e.hasOwnProperty(a)&&t.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return t.join("&")}function ey(e){let t=new FormData;return Object.entries(e).forEach(e=>{if(Array.isArray(e[1]))for(let a of e[1])t.append(e[0],a);else t.append(e[0],e[1])}),t}async function ef(e){let t={hasPrepare:!1,hasVocabs:!1,hasThinkingSkills:!1,hasCloseText:!1,hasEthraa:!1,hasAssignment:!1,hasProject:!1,hasExam:!1};if(!e.LectureId)return t;{let a=await $.ajax({url:"https://schools.madrasati.sa/Teacher/Lessons/viewLectureDetails?Data="+e.Data,method:"GET",headers:{requestverificationtoken:m()},timeout:3400}).then(e=>e),s=P(a);t.hasPrepare=(s.getElementById("LectureClassPreparationText")?.innerText?.trim()??"")!="",t.hasVocabs=(s.getElementById("LessonVocabulary")?.innerText?.trim()??"")!="",t.hasThinkingSkills=(s.getElementById("ThinkingSkills")?.innerText?.trim()??"")!="",t.hasCloseText=(s.getElementById("LectureClassCloseText")?.innerText?.trim()??"")!="",console.log(t);let n=s.getElementsByClassName("ibox-content")[11];t.hasEthraa=n?.getElementsByClassName("bgframcard").length>0;let l=s.getElementsByClassName("ibox-content")[12];t.hasAssignment=l?.getElementsByClassName("bgframcard")?.length>0;let i=s.getElementsByClassName("ibox-content")[13];t.hasExam=i?.getElementsByClassName("bgframcard")?.length>0;let r=s.getElementsByClassName("ibox-content")[14];return t.hasProject=r?.getElementsByClassName("bgframcard").length>0,t}}function eb(e,t){return new Promise((a,s)=>{let n=setInterval(()=>{t()&&(a(!0),clearInterval(n))},e)})}async function eT(){let e=document.getElementById("loading-info");I();let a=[];for(let n of s){e.innerText=`جاري تحضير تقرير يوم ${t[n.CurrentDayIndex]} ...`;let l=n.TimeTable.length,i=n.TimeTable.filter(e=>e.LectureId),r=l-i.length,o={name:t[n.CurrentDayIndex],lessonsCount:l,lessonsSetCount:i.length,lessonsUnsetCount:r,lessonsWithPrepareCount:0,lessonsWithVocabsCount:0,lessonsWithThinkingSkillsCount:0,lessonsWithCloseTextCount:0,lessonsWithEthraaCount:0,lessonsWithAssignmentCount:0,lessonsWithProjectCount:0,lessonsWithExamCount:0,lessonsSetPercentage:0,lessonsElementsPercentage:0},d=[];for(let c of n.TimeTable)d.push(await ef(c));o.lessonsWithPrepareCount=d.filter(e=>e.hasPrepare).length,o.lessonsWithVocabsCount=d.filter(e=>e.hasVocabs).length,o.lessonsWithThinkingSkillsCount=d.filter(e=>e.hasThinkingSkills).length,o.lessonsWithCloseTextCount=d.filter(e=>e.hasCloseText).length,o.lessonsWithEthraaCount=d.filter(e=>e.hasEthraa).length,o.lessonsWithAssignmentCount=d.filter(e=>e.hasAssignment).length,o.lessonsWithProjectCount=d.filter(e=>e.hasProject).length,o.lessonsWithExamCount=d.filter(e=>e.hasExam).length,o.lessonsSetPercentage=o.lessonsSetCount/o.lessonsCount*100,o.lessonsSetPercentage=o.lessonsSetPercentage||0,o.lessonsElementsPercentage=(o.lessonsWithPrepareCount+o.lessonsWithVocabsCount+o.lessonsWithThinkingSkillsCount+o.lessonsWithCloseTextCount+o.lessonsWithEthraaCount+o.lessonsWithAssignmentCount+o.lessonsWithProjectCount+o.lessonsWithExamCount)/o.lessonsCount/8*100,o.lessonsElementsPercentage=o.lessonsElementsPercentage||0,a.push(o)}let u=a.reduce((e,t)=>e+t.lessonsCount,0),h=a.reduce((e,t)=>e+t.lessonsSetCount,0),p=a.reduce((e,t)=>e+t.lessonsUnsetCount,0),m=a.reduce((e,t)=>e+t.lessonsWithPrepareCount,0),g=a.reduce((e,t)=>e+t.lessonsWithVocabsCount,0),y=a.reduce((e,t)=>e+t.lessonsWithThinkingSkillsCount,0),f=a.reduce((e,t)=>e+t.lessonsWithCloseTextCount,0),b=a.reduce((e,t)=>e+t.lessonsWithEthraaCount,0),T=a.reduce((e,t)=>e+t.lessonsWithAssignmentCount,0),E=a.reduce((e,t)=>e+t.lessonsWithProjectCount,0),L=a.reduce((e,t)=>e+t.lessonsWithExamCount,0),C=a.reduce((e,t)=>e+t.lessonsSetPercentage,0)/5;C=C||0;let x=a.reduce((e,t)=>e+t.lessonsElementsPercentage,0)/5;x=x||0,a.push({name:"المجموع",lessonsCount:u,lessonsSetCount:h,lessonsUnsetCount:p,lessonsWithPrepareCount:m,lessonsWithVocabsCount:g,lessonsWithThinkingSkillsCount:y,lessonsWithCloseTextCount:f,lessonsWithEthraaCount:b,lessonsWithAssignmentCount:T,lessonsWithProjectCount:E,lessonsWithExamCount:L,lessonsSetPercentage:C,lessonsElementsPercentage:x}),e.innerText="",_(),v(),function e(t){document.getElementById("report-container").style.display="flex";let a=document.getElementById("report-table");for(let s of(a.innerHTML="",t)){let n=document.createElement("tr"),l=document.createElement("td");l.classList.add("navbar-default"),l.classList.add("white-text"),l.classList.add("bold"),"المجموع"==s.name&&(n.className="total-row",l.classList.add("total-row")),l.innerText=s.name;let i=document.createElement("td");i.innerText=s.lessonsCount;let r=document.createElement("td");r.innerText=s.lessonsSetCount;let o=document.createElement("td");o.innerText=s.lessonsUnsetCount;let d=document.createElement("td");d.innerText="%"+(s.lessonsSetPercentage?.toFixed(2)||0);let c=document.createElement("td");c.innerText=s.lessonsWithPrepareCount;let u=document.createElement("td");u.innerText=s.lessonsWithVocabsCount;let h=document.createElement("td");h.innerText=s.lessonsWithThinkingSkillsCount;let p=document.createElement("td");p.innerText=s.lessonsWithCloseTextCount;let m=document.createElement("td");m.innerText=s.lessonsWithEthraaCount;let g=document.createElement("td");g.innerText=s.lessonsWithAssignmentCount;let y=document.createElement("td");y.innerText=s.lessonsWithExamCount;let f=document.createElement("td");f.innerText=s.lessonsWithProjectCount;let b=document.createElement("td");b.innerText="%"+(s.lessonsElementsPercentage?.toFixed(2)||0),n.append(l,i,r,o,d,c,u,h,p,m,g,y,f,b),a.appendChild(n)}}(a)}async function ev(){document.getElementById("loading-info").innerText=a;let e=await y();await f(e),s=e,function e(t){r=[];for(let a=1;a<6;a++)for(let s=1;s<9;s++)(cell=document.getElementById(`${a}-${s}`)).innerHTML="",cell.classList.remove("set-cell");for(let n of t)for(let l of n.TimeTable){let i=`${l.DayNumber+1}-${l.SlotNumber}`,o=`${l.ClassRoomName} - ${l.SubjectName}`,d=l.LectureId,c=1==l.AllowEdit;L(i,{lectureIdEnc:l.LectureIdEnc,subname:l.SubjectName,title:o,isSet:d,allowEdit:c,options:l.options,data:l.Data,eschoolid:l.SchoolIdDec})}let u=document.getElementsByClassName("setup-select");for(let h of u)h.addEventListener("change",A);let p=document.getElementsByClassName("single-checkbox");for(let m of p)m.addEventListener("change",B)}(e),_()}function eE(e){let t=0;for(let a=0;a<e.length;a++)t=e.charCodeAt(a)+((t<<5)-t);let s="#";for(let n=0;n<3;n++)s+=("00"+(t>>8*n&255).toString(16)).substr(-2);return s+"60"}function e$(e,t="white",a="black"){let s="#"===e.charAt(0)?e.substring(1,7):e,n=parseInt(s.substring(0,2),16),l=parseInt(s.substring(2,4),16),i=parseInt(s.substring(4,6),16);return .299*n+.587*l+.114*i>186?a:t}!function e(){setTimeout(()=>{try{for(let t of(document.getElementById("publicModal").remove(),document.getElementsByClassName("modal-backdrop")))t.remove();for(let a of document.getElementsByClassName("modal-dialog"))a.remove();document.getElementById("modal-body").remove()}catch{d<10&&(d++,e())}},500)}(),$(document).ready(()=>{window.location.href.includes("LessonDetailsNew")?setTimeout(()=>{ea()},2e3):window.location.href.includes("SchoolManagment")?setTimeout(()=>{!function e(t){container=document.getElementsByClassName("page-title")[0].parentNode,(main_elm=document.createElement("div")).innerHTML=n,container.prepend(main_elm),document.getElementById("prepare-btn").addEventListener("click",async()=>{I(),ev()}),document.getElementById("close-btn").addEventListener("click",e=>{E()}),document.getElementById("increase-btn").addEventListener("click",()=>{l+=7,p(),I(),ev()}),document.getElementById("decrease-btn").addEventListener("click",()=>{l-=7,p(),I(),ev()}),document.getElementById("report-btn").addEventListener("click",()=>{eT()}),document.getElementById("save-btn").addEventListener("click",async()=>{let e=document.querySelector("#inner-table-cont");if(!e){alert("Somthing Went Worng "),window.location.reload();return}I();let t=`
        <div class="_overlay" id="_overlay">
            <div class="_model-close" onclick="this.parentNode.remove()">
              <i class="fas fa-times"></i>
            </div>
        </div>
      `;e.parentNode.insertAdjacentHTML("beforeend",t);let a=[];for(let s=0;s<r.length;s++)a.push(Object.assign(document.createElement("iframe"),{id:"rep-"+s,className:"page-frames",src:ec(r[s]),style:"position:absolute; min-height:70vh; max-height:100%; top:0;",type:"text/html"}));a.forEach(e=>{document.getElementById("_overlay").appendChild(e)}),a.forEach(e=>{var t;let a;t=function(){let t=e.contentWindow,a=t.document,s={};return t.location.search.replace(/^./,"").split("&").forEach(e=>{let t=e.split("=");s[t[0]]=t[1]}),a.getElementsByTagName("div")[0]&&ea(s,a,t,e),a.getElementsByTagName("div")[0]},a=setInterval(()=>{t()&&clearInterval(a)},1e3),e.contentDocument.addEventListener("DOMContentLoaded",()=>{console.log("iframe",e,e.contentDocument),setTimeout(()=>{ea()},2e3)})}),ev()}),document.getElementById("del-all-btn").addEventListener("click",async()=>{await S(),ev()});let a=document.getElementsByClassName("del-day-btn");for(let s of a)s?.addEventListener("click",async e=>{await k(e),ev()}),s?.addEventListener("mouseover",e=>{C(e)}),s?.addEventListener("mouseout",e=>{x(e)});let i=document.getElementsByClassName("check-all");for(let o of i)o?.addEventListener("change",w);document.getElementById("close-report").addEventListener("click",()=>{document.getElementById("report-container").style.display="none"}),p()}()},1500):console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")})}function eI(e){var t=document.getElementById(e).innerHTML,a=window.open("","","height=1200, width=800");a.document.write("<html dir='rtl'>"),a.document.write("<body>"),a.document.write(t),a.document.write("</body></html>"),a.document.close(),a.print()}var e_={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,a,s,n,l,i,r,o="",d=0;for(e=e_._utf8_encode(e);d<e.length;)t=e.charCodeAt(d++),a=e.charCodeAt(d++),s=e.charCodeAt(d++),n=t>>2,l=(3&t)<<4|a>>4,i=(15&a)<<2|s>>6,r=63&s,isNaN(a)?i=r=64:isNaN(s)&&(r=64),o=o+this._keyStr.charAt(n)+this._keyStr.charAt(l)+this._keyStr.charAt(i)+this._keyStr.charAt(r);return o},decode:function(e){var t,a,s,n,l,i,r,o="",d=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");d<e.length;)n=this._keyStr.indexOf(e.charAt(d++)),l=this._keyStr.indexOf(e.charAt(d++)),i=this._keyStr.indexOf(e.charAt(d++)),r=this._keyStr.indexOf(e.charAt(d++)),t=n<<2|l>>4,a=(15&l)<<4|i>>2,s=(3&i)<<6|r,o+=String.fromCharCode(t),64!=i&&(o+=String.fromCharCode(a)),64!=r&&(o+=String.fromCharCode(s));return e_._utf8_decode(o)},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",a=0;a<e.length;a++){var s=e.charCodeAt(a);s<128?t+=String.fromCharCode(s):s>127&&s<2048?(t+=String.fromCharCode(s>>6|192),t+=String.fromCharCode(63&s|128)):(t+=String.fromCharCode(s>>12|224),t+=String.fromCharCode(s>>6&63|128),t+=String.fromCharCode(63&s|128))}return t},_utf8_decode:function(e){for(var t="",a=0,s=c1=c2=0;a<e.length;)(s=e.charCodeAt(a))<128?(t+=String.fromCharCode(s),a++):s>191&&s<224?(t+=String.fromCharCode((31&s)<<6|63&(c2=e.charCodeAt(a+1))),a+=2):(t+=String.fromCharCode((15&s)<<12|(63&(c2=e.charCodeAt(a+1)))<<6|63&(c3=e.charCodeAt(a+2))),a+=3);return t}}}();