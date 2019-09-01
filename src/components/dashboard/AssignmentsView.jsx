import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { getAssignments } from "../../actions/assignments";

import { withTranslation, useTranslation } from "react-i18next";

import css from "../../styles/dashboard/assignments/assignmentsView.module.scss";

function Assignment(props) {
  const { t } = useTranslation();
  if (props.item === undefined) return null;

  return (
    <tr key={props.item.id}>
      <td>{props.item.subject}</td>
      <td>{props.item.text}</td>
      <td>{t("date", { date: new Date(props.item.due_date) })}</td>
      <td>{props.item.author_name}</td>
    </tr>
  );
}

class AssignmentsView extends Component {
  componentDidMount() {
    this.props.getAssignments();
  }

  render() {
    const { t } = this.props;
    return (
      <Fragment>
        <h1 className="m-heading">assignments view</h1>
        <table>
          <thead>
            <tr>
              <th>{t("dashboard.assignments.table.subject")}</th>
              <th>{t("dashboard.assignments.table.text")}</th>
              <th>{t("dashboard.assignments.table.dueDate")}</th>
              <th>{t("dashboard.assignments.table.author")}</th>
            </tr>
          </thead>
          <tbody>
            {this.props.assignments
              .sort((a, b) => {
                const ad = Date.parse(a.due_date);
                const bd = Date.parse(b.due_date);

                if (ad < bd) {
                  return 1;
                } else if (ad > bd) {
                  return -1;
                }

                return 0;
              })
              .map(x => {
                return <Assignment item={x} />;
              })}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  assignments: state.assignments.assignments
});

export default withTranslation()(
  connect(
    mapStateToProps,
    { getAssignments }
  )(AssignmentsView)
);
