body{
    margin:0;
    background-image: url("image/1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
.container{
    background-color: bisque;
    min-height: 100vh;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.task-tabs{

    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;
    background-color: #f5f5f5;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    position: relative;
}

.tesk-area{
    border: 1px solid lightgray;
}

#under-line{
height: 4px;
background-color: hotpink;
position:absolute;
width:100px;
left: 0;
top: 65px;
padding:0px;
}
.task-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 10px 0; /* 패딩을 조절하여 간격을 만듭니다 */
    background-color: #f5f5f5;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
