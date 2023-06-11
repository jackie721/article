import{g as k,i as V,_ as w,d as v,o as C,c as E,a as u,b as l,w as t,F as y,e as i}from"./index-d875f745.js";import{E as z,a as F,b as L}from"./el-table-column-92d5f4eb.js";import{E as I,a as P,b as U,c as W}from"./el-button-17593b8b.js";import{E as $}from"./el-pagination-efc502da.js";import"./el-select-a13840af.js";import"./validator-9e82ad1c.js";const S=e=>V.request({url:"api/competition/delete",method:"get",params:e}),p=k.create({baseURL:"http://api.jqrjq.cn",withCredentials:!0});p.interceptors.request.use(e=>e,e=>Promise.reject(e));p.interceptors.response.use(e=>e,e=>Promise.reject(e));const _=v({data(){return{}},props:["id"],data(){return{competition:[],page:{total:0,current:1,size:10},dialogFormVisible:!1,competition:{name:"",homePage:"",type:"",id:0,level:"",schoolId:"",organizer:"",start:"",end:""},formLabelWidth:80,isActive:!0,hasError:!1,activeClass:{background:"red",color:"blue"},errorClass:"hasError",awesome:!0,salesclerks:[{id:1,name:"智能家居管理系统",homePage:"泉州信息工程学院",type:"个人赛",level:"院级",schoolId:"666",organizer:"软件学院",start:"2023.2.2",end:"2023.6.30"},{id:2,name:"学生宿舍管理系统",homePage:"泉州信息工程学院",type:"个人赛",level:"院级",schoolId:"666",organizer:"软件学院",start:"2023.2.2",end:"2023.6.30"},{id:3,name:"医疗设备管理系统",homePage:"泉州信息工程学院",type:"个人赛",level:"院级",schoolId:"666",organizer:"软件学院",start:"2023.2.2",end:"2023.6.30"}],dialogSalesclerksFormVisible:!1,salesclerk:{id:0,name:"",prefession:"",shop:""},formLabelWidth:"140px",flag:!0}},methods:{del(e){console.log(e),S({id:e}).then(m=>{if(m.success)this.getAdCatesPage(this.page.current);else return console.log(m.msg),!1}).catch(m=>{})},save(){console.log(this.salesclerk),this.flag&&this.salesclerks.push(this.salesclerk),this.dialogSalesclerksFormVisible=!1},handleEdit(e,a){this.flag=!1,console.log(e,a),this.dialogSalesclerksFormVisible=!0,this.salesclerk=a},handleDelete(e,a){console.log(e,a),this.salesclerks.splice(e,1)},toadd(){this.salesclerk={id:0,name:"",prefession:"",shop:""},this.dialogSalesclerksFormVisible=!0,this.flag=!0},customEvent(){console.log("customEvent")},customEvent1(e){console.log("customEvent",e)}}}),j={class:"tools"},q={class:"dialog-footer"};function B(e,a,m,D,N,T){const n=I,s=L,f=z,b=$,r=P,d=U,h=W,g=F;return C(),E(y,null,[u("div",j,[l(n,{icon:"plus",onClick:e.toadd},{default:t(()=>[i("添加")]),_:1},8,["onClick"])]),l(f,{data:e.salesclerks,stripe:"",style:{width:"100%"}},{default:t(()=>[l(s,{prop:"id",label:"id",width:"50"}),l(s,{prop:"name",label:"竞赛名称"}),l(s,{prop:"homePage",label:"竞赛官网"}),l(s,{prop:"type",label:"竞赛类型"}),l(s,{prop:"level",label:"竞赛等级"}),l(s,{prop:"schoolId",label:"学校"}),l(s,{prop:"organizer",label:"主办单位"}),l(s,{prop:"start",label:"开始时间"}),l(s,{prop:"end",label:"结束时间"}),l(s,{label:"功能管理"},{default:t(o=>[l(n,{size:"small",onClick:c=>e.handleEdit(o.$index,o.row)},{default:t(()=>[i("编辑")]),_:2},1032,["onClick"]),l(n,{size:"small",type:"danger",onClick:c=>e.handleDelete(o.$index,o.row)},{default:t(()=>[i("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(b,{background:"",layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"]),l(g,{modelValue:e.dialogSalesclerksFormVisible,"onUpdate:modelValue":a[10]||(a[10]=o=>e.dialogSalesclerksFormVisible=o),title:"添加"},{footer:t(()=>[u("span",q,[l(n,{onClick:a[9]||(a[9]=o=>e.dialogSalesclerksFormVisible=!1)},{default:t(()=>[i("取消")]),_:1}),l(n,{type:"primary",onClick:e.save},{default:t(()=>[i(" 确定 ")]),_:1},8,["onClick"])])]),default:t(()=>[l(h,{model:e.salesclerk},{default:t(()=>[l(d,{label:"id","label-width":e.formLabelWidth},{default:t(()=>[l(r,{modelValue:e.salesclerk.id,"onUpdate:modelValue":a[0]||(a[0]=o=>e.salesclerk.id=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"竞赛名称","label-width":e.formLabelWidth},{default:t(()=>[l(r,{modelValue:e.salesclerk.name,"onUpdate:modelValue":a[1]||(a[1]=o=>e.salesclerk.name=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"竞赛官网","label-width":e.formLabelWidth},{default:t(()=>[l(r,{modelValue:e.salesclerk.homePage,"onUpdate:modelValue":a[2]||(a[2]=o=>e.salesclerk.homePage=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"竞赛类型","label-width":e.formLabelWidth},{default:t(()=>[l(r,{modelValue:e.salesclerk.type,"onUpdate:modelValue":a[3]||(a[3]=o=>e.salesclerk.type=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"竞赛等级","label-width":e.formLabelWidth},{default:t(()=>[l(r,{modelValue:e.salesclerk.level,"onUpdate:modelValue":a[4]||(a[4]=o=>e.salesclerk.level=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"学校","label-width":e.formLabelWidth},{default:t(()=>[l(r,{modelValue:e.salesclerk.schoolId,"onUpdate:modelValue":a[5]||(a[5]=o=>e.salesclerk.schoolId=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"主办单位","label-width":e.formLabelWidth},{default:t(()=>[l(r,{modelValue:e.salesclerk.organizer,"onUpdate:modelValue":a[6]||(a[6]=o=>e.salesclerk.organizer=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"开始时间","label-width":e.formLabelWidth},{default:t(()=>[l(r,{modelValue:e.salesclerk.start,"onUpdate:modelValue":a[7]||(a[7]=o=>e.salesclerk.start=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"结束时间","label-width":e.formLabelWidth},{default:t(()=>[l(r,{modelValue:e.salesclerk.end,"onUpdate:modelValue":a[8]||(a[8]=o=>e.salesclerk.end=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const M=w(_,[["render",B],["__scopeId","data-v-ddb8af2f"]]);export{M as default};
