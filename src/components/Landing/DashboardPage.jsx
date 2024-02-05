import React from 'react'
import Header from '../common/Header';
import { Row } from 'rsuite';
import InputGroup from '../common/InputGroup';
const DashboardLayout = React.lazy(()=>import('../Layout/DashboardLayout'));

function DashboardPage() {
  return (
    <DashboardLayout>
        <Header/>
        <div className="container-fluid pt-4">
            <div className="card border-0  bg-light">
                <div className="card-body ">
                    <Row className='m-0'>
                        <InputGroup
                            label={"First Name"}
                            formClassName={"col-12 col-sm-4"}
                            placeholder={"Enter first name"}
                        />
                    </Row>
                </div>
            </div>
        </div>
    </DashboardLayout>
  )
}
export default React.memo(DashboardPage)