import React from "react";
import styles from "../../styles/sExploreData/PickedData.module.scss";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";

const PickedData = () => {
  return (
    <section className={styles.globalDownload}>
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Download Data"
          subtitle="Select a file to download your data"
          title="Download Data"
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <Button variant="flat" color="primary">
              JSON
            </Button>
            <Button variant="flat" color="primary">
              Excel
            </Button>
            <Button variant="flat" color="primary">
              CSV
            </Button>
            <Button variant="flat" color="primary">
              Parquet
            </Button>
            <Button variant="flat" color="primary">
              Other
            </Button>
          </div>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default PickedData;

