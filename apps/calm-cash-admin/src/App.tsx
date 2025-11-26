import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AccountMembershipList } from "./accountMembership/AccountMembershipList";
import { AccountMembershipCreate } from "./accountMembership/AccountMembershipCreate";
import { AccountMembershipEdit } from "./accountMembership/AccountMembershipEdit";
import { AccountMembershipShow } from "./accountMembership/AccountMembershipShow";
import { InvitationList } from "./invitation/InvitationList";
import { InvitationCreate } from "./invitation/InvitationCreate";
import { InvitationEdit } from "./invitation/InvitationEdit";
import { InvitationShow } from "./invitation/InvitationShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { AttachmentList } from "./attachment/AttachmentList";
import { AttachmentCreate } from "./attachment/AttachmentCreate";
import { AttachmentEdit } from "./attachment/AttachmentEdit";
import { AttachmentShow } from "./attachment/AttachmentShow";
import { AiExtractionList } from "./aiExtraction/AiExtractionList";
import { AiExtractionCreate } from "./aiExtraction/AiExtractionCreate";
import { AiExtractionEdit } from "./aiExtraction/AiExtractionEdit";
import { AiExtractionShow } from "./aiExtraction/AiExtractionShow";
import { UserSettingList } from "./userSetting/UserSettingList";
import { UserSettingCreate } from "./userSetting/UserSettingCreate";
import { UserSettingEdit } from "./userSetting/UserSettingEdit";
import { UserSettingShow } from "./userSetting/UserSettingShow";
import { AuditLogList } from "./auditLog/AuditLogList";
import { AuditLogCreate } from "./auditLog/AuditLogCreate";
import { AuditLogEdit } from "./auditLog/AuditLogEdit";
import { AuditLogShow } from "./auditLog/AuditLogShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"calm cash"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="AccountMembership"
          list={AccountMembershipList}
          edit={AccountMembershipEdit}
          create={AccountMembershipCreate}
          show={AccountMembershipShow}
        />
        <Resource
          name="Invitation"
          list={InvitationList}
          edit={InvitationEdit}
          create={InvitationCreate}
          show={InvitationShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="Attachment"
          list={AttachmentList}
          edit={AttachmentEdit}
          create={AttachmentCreate}
          show={AttachmentShow}
        />
        <Resource
          name="AiExtraction"
          list={AiExtractionList}
          edit={AiExtractionEdit}
          create={AiExtractionCreate}
          show={AiExtractionShow}
        />
        <Resource
          name="UserSetting"
          list={UserSettingList}
          edit={UserSettingEdit}
          create={UserSettingCreate}
          show={UserSettingShow}
        />
        <Resource
          name="AuditLog"
          list={AuditLogList}
          edit={AuditLogEdit}
          create={AuditLogCreate}
          show={AuditLogShow}
        />
      </Admin>
    </div>
  );
};

export default App;
