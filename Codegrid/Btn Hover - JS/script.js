document.body.style.cursor = "none";

var cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

var follow = document.createElement("div");
follow.classList.add("follow");
document.body.appendChild(follow);

function move(obj, event) {
    obj.style = "";
    obj.style.top = event.clientY + "px";
    obj.style.left = event.clientX + "px";
}

if (cursor) {
    window.addEventListener("mousemove", function(event) {
        var e = event;
        var t = e.target;
        var f = follow;
        var c = cursor;

        if (t.tagName == "A") {
            c.style.backgroundColor = "transparent";

            f.style.top = t.offsetTop + "px";
            f.style.left = t.offsetLeft + "px";
            f.style.width = t.clientWidth + "px";
            f.style.height = t.clientHeight + "px";

            f.classList.add("on-focus");
        } else {
            move(c, e);
            move(f, e);
            f.classList.remove("on-focus");
        }
    });
}