import React from "react";


export default function Header() {

    return (
        <div class="container-fluid" style={{
            "paddingTop":"10px",
            "paddingBottom":"10px",
            "borderBottom":"7px solid rgb(190, 15, 15)"
        }}>
            <div class="row">
                <div class="col-md-3">
                    <img alt="Bootstrap Image Preview" src="https://soict.hust.edu.vn/wp-content/uploads/logo-soict-hust-1.png" style={{
                        "width": "221.5px"
                    }} />
                </div>
                <div class="col-md-6">
                    <h3 style={{
                        "fontSize": "18px",
                        "textAlign": "left",
                        "fontWeight": "700",
                        "paddingTop": "20px",
                        "letterSpacing":"3px",
                        "fontFamily":"sans-serif"
                    }}>
                        ĐẠI HỌC BÁCH KHOA HÀ NỘI <br></br>
                        TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG
                    </h3>
                </div>
                <div class="col-md-3">
                    <div class="row">
                        <div class="col-md-6" style={{
                            "textAlign":"end"
                        }}>

                            <img src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/vn.png" />
                        </div>
                        <div class="col-md-6" style={{
                            "textAlign":"left"
                        }}>

                            <img src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/gb.png" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="input-group rounded" style={{
                                "width":"300px"
                            }}>
                                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"  style={{
                                "width":"200px"
                            }}/>
                                <span class="input-group-text border-0" id="search-addon">
                                    <i class="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}