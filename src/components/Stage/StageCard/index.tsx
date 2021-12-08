import { useState } from 'react';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { FaFileDownload, FaFont, FaImage } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import { Stage } from '../../../entities/Stage';

import { useModal } from '../../../hooks/useModal';
import { useDownload } from '../../../hooks/useDownload';

import { Image } from '../../Common/Image';
import { FinishStageModal } from '../FinishStageModal';

import { Container } from './styles';

interface IStageCard {
  stage: Stage;
  canUpdate: boolean;
  isMaintenanceFinished: boolean;
  onStageFinished: () => void;
}

export function StageCard({
  stage,
  canUpdate,
  isMaintenanceFinished,
  onStageFinished,
}: IStageCard) {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { download } = useDownload();

  const [isCollapsed, setIsCollapsed] = useState(true);

  const status = ['Em execução', 'Finalizada'];

  function handleCardClick() {
    if (stage.status === 1) return setIsCollapsed(!isCollapsed);

    if (canUpdate) openModal();
  }

  function handleImageDownloadClick() {
    download({
      href: stage.value as string,
      fileName: stage.description,
      extension: 'png',
    });
  }

  return (
    <>
      <Container
        status={stage.status}
        canClick={isMaintenanceFinished ? true : canUpdate}
        onClick={handleCardClick}
      >
        <div className="card">
          <div className="card-header">
            <h3>
              <div>
                {stage.type === 1 && <FaFont size={18} />}
                {stage.type === 2 && <AiOutlineFieldNumber size={24} />}
                {stage.type === 3 && <FaImage size={18} />}
              </div>
              {stage.description}
            </h3>

            <div>
              <h3 className="status">{status[stage.status]}</h3>
              {stage.status === 1 &&
                (isCollapsed ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />)}
            </div>
          </div>

          {stage.status === 1 && !isCollapsed && (
            <div className="card-expanded">
              {stage.type === 1 && (
                <span>
                  <strong>Conclusão: </strong>
                  {stage.value}
                </span>
              )}

              {stage.type === 2 && (
                <span>
                  <strong>Valor: </strong>
                  {stage.value}
                </span>
              )}

              {stage.type === 3 && (
                <>
                  <button onClick={handleImageDownloadClick}>
                    <FaFileDownload /> Baixar imagem
                  </button>
                  <div className="image-container">
                    <Image uri={stage.value as string} alt="" />
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </Container>

      <FinishStageModal
        isOpen={isModalOpen}
        stage={stage}
        closeModal={closeModal}
        onStageFinished={onStageFinished}
      />
    </>
  );
}
