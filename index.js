document.querySelector('.add').onclick = function () {
    if (document.querySelector('#control input').value.length == 0) {
        alert("Пустая строка.")
    }
    else {
        if (document.querySelector('#control input').value.length > 30) {
            document.querySelector('#control input').value.length = null;
            alert("Иди в пизду тестировщик хуев!!!");
        }
        else{    
            document.querySelector('#todo').innerHTML += `
                <div class="task">
                    <span id="taskname">
                        ${document.querySelector
                    ('#control input').value}
                    </span>
                    <button id="buttons" class="delete">
                    <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;

            var current_tasks = document.querySelectorAll(".delete");
            for (var i = 0; i < current_tasks.length; i++) {
                current_tasks[i].onclick = function () {
                    this.parentNode.remove();
                }
            }

            var tasks = document.querySelectorAll(".task");
            for (var i = 0; i < tasks.length; i++) {
                tasks[i].onclick = function () {
                    this.classList.toggle('success');
                }
            }

            document.querySelector("#control input").value = "";
        }
    }
}