  <div className="flex p-6 items-center w-full justify-center bg-[#7444a7]">
        <CircularLoader size="lg" />
      </div>
      <LoadingDots size="md" />
      <div className="w-full mx-auto px-4">
        <Button
          iconLeft={<RefreshCw className="w-4 h-4" />}
          onClick={() => console.log("refresh")}
        >
          Refresh
        </Button>
      </div>
      <div className="commentBlock bg-white rounded-[24px] w-full p-6">
        <FieldTextarea
          name="moment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Describe the moment you want to immortalize..."
          maxLength={500}
        />
      </div>

      {code}
      <div className="formBlock bg-white shadow-md w-full p-3 rounded-[24px]">
        <FieldInput
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          maxLength={30}
        />
      </div>
      {/* <Collapsible label={LEARN_MORE_LABEL}>
        {LEARN_MORE_MARKETING_COPY}
      </Collapsible> */}
      <CheckboxSection
        title="Checkmark Section"
        items={CONSENT_ITEMS}
        onChange={(values) => console.log(values)}
      >
        <Collapsible label="Learn more">
          By checking this box, you agree to receive personalized marketing
          communications...
        </Collapsible>
      </CheckboxSection>