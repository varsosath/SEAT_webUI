 $(function () {
                $("#myTable").dynamicTable({
                    columns: [{
                            text: "Resource",
                            key: "resource"
                        },
                        {
                            text: "From Node",
                            key: "node"
                        },
                        {
                            text: "Unit",
                            key: "unit"
                        },
						 {
                            text: "Name",
                            key: "name"
                        },
                    ],
                    data: [{
                            resource:'COD',
							node:'Screening',
							unit:'kg',
							name:'COD in'
							
                        },
                       
                    ],
                    getControl: function (columnKey) {
                      /*  if (columnKey == "age") {
                            return '<input type="number" class="form-control" />';
                        }

                        if (columnKey == "gender") {
                            return '<select class="form-control"><option value="M">Male</option><option value="F">Female</option></select>';
                        }*/
						  if (columnKey == "resource") {
                            return '<select class="form-control"><option></option></select>';
                        }

                        return '<input type="text" class="form-control" />';
                    },
                });

                $('#btnGetData').click(function () {
                    var data = $("#myTable").getTableData();
                    console.log(data);
                });
            });
$(function () {
                $("#myTable2").dynamicTable({
                    columns: [{
                            text: "Resource",
                            key: "resource"
                        },
                        {
                            text: "To Node",
                            key: "node"
                        },
                        {
                            text: "Unit",
                            key: "unit"
                        },
						 {
                            text: "Name",
                            key: "name"
                        },
                    ],
                    data: [{
                            
							
                        },
                       
                    ],
                    getControl: function (columnKey) {
						/*
                        if (columnKey == "resource") {
                            return '<input type="number" class="form-control" />';
                        }
                          */
                        if (columnKey == "resource") {
                            return '<select class="form-control"><option></option></select>';
                        }

                        return '<input type="text" class="form-control" />';
                    },
                });

                $('#btnGetData').click(function () {
                    var data = $("#myTable2").getTableData();
                    console.log(data);
                });
            });
