// import React from 'react';
// import axios from 'axios';
// import { PieChart, Pie } from 'recharts';
// import Button from 'material-ui/Button/Button';
//
// /*import C3Chart from 'react-c3js';
// import 'c3/c3.css';
// var adata;
//
// class ratingAnalysis extends React.Component{
//         constructor(props){
//           super(props);
//           this.state={
//             data:[]
//           }
//         }
//     
//
//     analysisReport = ()=>{
//         let self = this;
//         axios.get('https://aicte.herokuapp.com/initiatives/1/ratings')
//           .then(function (response) {
//             console.log(response);
//             adata = response.data;
//             self.setState({
//                 data: adata,
//             });
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
//
//     }
//     render(){
//         const data = {
//             columns: [
//               ['data1', 30, 200, 100, 400, 150, 250],
//               ['data2', 50, 20, 10, 40, 15, 25]
//             ]
//           };
//         var chart = c3.generate({
//             bindto: '#chart',
//             data: this.state.data,
//             axis: {
//               x: {
//                 // type: 'category'
//               }
//             }
//           });
//         return(
//             <div>
//                 <Button onClick={this.analysisReport}>GET ANALYSIS</Button>
// <div id="chart"></div>
// </div>
//         );
//     }
//
// }
//
//
//   export default ratingAnalysis;
//   */
//
//   var adata = [];
//
//   class ratingAnalysis extends React.Component{
      constructor(props){
          super(props);
          this.state={
            data:[]
          }
        }
//
//     analysisReport = ()=>{
//         let self = this;
//         axios.get('https://aicte.herokuapp.com/initiative/1/ratings')
//           .then(function (response) {
//             console.log(response);
//             for(var i=0;i<2;i++){
//                adata[i] = response.data.ratings[i].parameters[i].value;
//              }
    //         console.log(adata);
                self.setState({
                    data: adata,
                },()=>console.log(self.state.data))
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
            console.log(this.state.data);
//     }
//     render(){
// return(
//     <div>
//         <Button onClick={this.analysisReport}>Generate Report </Button>
//   <PieChart width={730} height={250}>
//   <Pie data={this.state.data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
//   <Pie data={this.state.data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
// </PieChart>
// </div>
// );
//     }
// }
//
// export default ratingAnalysis;
