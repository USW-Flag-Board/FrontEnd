<template>
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
          <td></td>
        </tr>
      </tbody>
    </table>
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
.board  {
  font-size: 12px;
  margin: 0;
  padding: 0;
  width: 100%;
  color: white;
  text-align: center;
  border-collapse: collapse;
}
thead tr {
  background-color: #181818;
}
tbody tr {
  text-align: center;
  color: white;
}
tbody tr:nth-child(2n) {
  background-color: #313131;
}
</style>