import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  FormGroup,
  Label,
  Button,
  Form,
  Input
} from "reactstrap";
import Select from "react-select";

import { Colxx } from "../../components/common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import CustomSelectInput from "../../components/common/CustomSelectInput";

const selectData = [
  { label: "Cake", value: "cake", key: 0 },
  { label: "Cupcake", value: "cupcake", key: 1 },
  { label: "Dessert", value: "dessert", key: 2 }
];

export default class QuickPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: []
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  render() {
    return (
      <Card>
        <div className="position-absolute card-top-buttons">
          <UncontrolledDropdown>
            <DropdownToggle
              color=""
              className="btn btn-header-light icon-button"
            >
              <i className="simple-icon-refresh" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <IntlMessages id="dashboard.sales" />
              </DropdownItem>
              <DropdownItem>
                <IntlMessages id="dashboard.orders" />
              </DropdownItem>
              <DropdownItem>
                <IntlMessages id="dashboard.refunds" />
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <CardBody>
          <CardTitle>
            <IntlMessages id="dashboards.quick-post" />
          </CardTitle>
          <Form className="dashboard-quick-post">
            <FormGroup row>
              <Label sm="3">
                <IntlMessages id="dashboards.title" />
              </Label>
              <Colxx sm="9">
                <Input type="text" name="text" />
              </Colxx>
            </FormGroup>

            <FormGroup row>
              <Label sm="3">
                <IntlMessages id="dashboards.content" />
              </Label>
              <Colxx sm="9">
                <Input type="textarea" rows="3" />
              </Colxx>
            </FormGroup>

            <FormGroup row>
              <Label sm="3">
                <IntlMessages id="dashboards.category" />
              </Label>
              <Colxx sm="9">
                <Select
                  components={{ Input: CustomSelectInput }}
                  className="react-select"
                  classNamePrefix="react-select"
                  name="form-field-name"
                  value={this.state.selectedOption}
                  onChange={this.handleChange}
                  options={selectData}/>
              </Colxx>
            </FormGroup>
            <Button className="float-right" color="primary">
              <IntlMessages id="dashboards.save-and-publish" />
            </Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
