function createCalendar(elem, year, month) {
    let mon = month - 1; // JS中月份从0开始
    let d = new Date(year, mon);

    let table = '<div class="calendar-header"><div>日</div><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div></div><div class="calendar-body">';

    // 空格，直到第一天
    for (let i = 0; i < d.getDay(); i++) {
        table += '<div class="day"></div>';
    }

    // 日历主体：从1号到月末
    while (d.getMonth() == mon) {
        table += `<div class="day">${d.getDate()}</div>`;

        if (d.getDay() % 7 == 6) { 
            table += '</div><div class="calendar-body">'; 
        }

        d.setDate(d.getDate() + 1);
    }

    // 添加剩余的空格
    if (d.getDay() != 0) {
        for (let i = d.getDay(); i < 7; i++) {
            table += '<div class="day"></div>';
        }
    }

    // 结束表格
    table += '</div>';

    elem.innerHTML = table;
}

createCalendar(document.getElementById('calendar'), 2023, 4); // 示例：生成2023年4月的日历
