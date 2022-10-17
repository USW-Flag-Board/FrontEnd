<template>
  <div class="board1">
            <div class="titlebox">
              <h3>자유게시판</h3>
            </div>
          <div class="listbox">
            <div>
              <table class="board">
                <colgroup>
                  <col style="width: 5vw" />
                  <col style="width: 30vw" />
                  <col style="width: 5vw" />
                  <col style="width: 20vw" />
                  <col style="width: 10vw" />
                  <col style="width: 10vw" />
                  <col style="width: 20vw" />
                </colgroup>
                
            <tbody>
            <tr v-for="(idx,i) in WritingInformation" :key="idx">
                    <td>{{ WritingInformation[i].No }}</td>
                    <td>{{ WritingInformation[i].Header }}</td>
                    <td>{{ WritingInformation[i].Writer }}</td>
                    <td>{{ WritingInformation[i].WritingDate }}</td>
                    <td>{{ WritingInformation[i].WritingCount }}</td>
                    <td>{{ WritingInformation[i].WritingComment }}</td>
                    </tr>
            </tbody>
              </table>
          <div class="bottombox"></div>
        </div>
            </div>
          </div>
</template>

<script>
export default {
    name: 'Table',
    data() {

    return {
      WritingInformation: [
        {
          No: "1",
          Header: "제목1",
          Writer: "김준표",
          WritingDate: "0000-00-00",
          WritingCount: "2",
          WritingComment: "2",
        },

        {
          No: "2",
          Header: "제목2",
          Writer: "김준표",
          WritingDate: "0000-00-00",
          WritingCount: "2",
          WritingComment: "2",
        },

        {
          No: "3",
          Header: "제목2",
          Writer: "김준표",
          WritingDate: "0000-00-00",
          WritingCount: "2",
          WritingComment: "2",
        },

        {
          No: "4",
          Header: "제목2",
          Writer: "김준표",
          WritingDate: "0000-00-00",
          WritingCount: "2",
          WritingComment: "2",
        },

        {
          No: "5",
          Header: "제목2",
          Writer: "김준표",
          WritingDate: "0000-00-00",
          WritingCount: "2",
          WritingComment: "2",
        },
        
      ],
    };
    },
}
</script>

<style>
tbody tr {
  text-align: center;
  color: white;
}


tr, td{
  border: 1px solid white;
  
}

.board1 {
  margin: 0;
  padding-left: 1.5vw;
  width: 100%;
  height: 40vh;
  border: 2px groove brown;
  display: flex;
 
  flex-direction: column;
}

.board2 {
  margin: 0;
  padding-left: 1.5vw;
  width: 100%;
  height: 35vh;
  border: 2px groove brown;
  display: flex;
}

.titlebox {
  width: 100%;
  height: 40px;
  color: white;
  border: 2px groove blue;
}

.listmenu {
  display: flex;
  padding: 0;
  margin-top: 55px;
  border: 3px groove white;
  width: 10vw;
  height: 30vh;
  justify-content: space-evenly;
}

.listbox {
  display: flex;
  margin: 0;
  padding: 0;
  border: 3px groove white;
  width: 87vw;
  height: 70vh;
}
</style>