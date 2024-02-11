import React from 'react';
import { useState } from 'react';
import { Group } from '@/types/group';
import CreateGroupButton from '@/components/molecules/CreateGroupButton';
import InputGroup from '@/components/organisms/InputGroup';
interface GroupMenuProps {
  groups: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: any;
}

const GroupMenu: React.FC<GroupMenuProps> = ({ groups, onChange, setValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  const onClick = (id: number) => {
    console.log(`Group with id ${id} was clicked.`);
  };

  const groupList = groups.map((group: any) => {
    const color = JSON.parse(group.color);
    return { ...group, color };
  });


  const onGroupClick = (groupList: Group) => {
    setSelectedGroup(groupList); // 選択されたグループを更新
    setValue('group_id', groupList.id);
    setIsOpen(false); // ドロップダウンメニューを閉じる
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  // モーダルを表示する関数
  const showModal = () => {
    setIsModalVisible(true);
  };

  // モーダルを閉じる関数
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="relative inline-block text-left w-4/5 mx-5">
      <label className="block mb-2 text-sm font-medium text-gray-900">グループ：Group</label>
      <div className='flex items-center'>
        {selectedGroup && (
          <div
            className="w-4 h-4 mx-4"
            style={{ backgroundColor: `rgba(${selectedGroup.color.r}, ${selectedGroup.color.g}, ${selectedGroup.color.b}, ${selectedGroup.color.a})` }}
            aria-label="Selected group color"
          ></div>
        )}
        <input onChange={(e) => console.log("test")} name="group_id" onClick={toggleDropdown} value={selectedGroup ? selectedGroup.name : ''} id="dropdownButton" className={"${isOpen ? 'w-4/5' : 'w-full'} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"} placeholder=' グループを選択' />
      </div>
      {/* ドロップダウンメニュー */}
      <div className={`${isOpen ? 'block' : 'hidden'} z-10 w-full bg-white divide-y divide-gray-100 rounded shadow`} id="dropdown">
        <ul className="w-full py-1 text-sm text-gray-700" aria-labelledby="dropdownButton">
          {groupList.map((group: any) => (
            <li key={group.id} className='w-full'>
              <button type="button" className="block px-4 py-2 w-full text-left hover:bg-gray-100" onClick={() => onGroupClick(group)}>
                <div className="flex items-center">
                  <div className="w-4 h-4 mx-4" style={{ backgroundColor: `rgba(${group.color.r},${group.color.g},${group.color.b},${group.color.a})` }}></div>
                  <p>{group.name}</p>
                </div>
              </button>
            </li>
          ))}
          <CreateGroupButton onClick={showModal} />
        </ul>
      </div>
      {isModalVisible && (
        <div className="modal">
          <InputGroup title="Group" subtitle="一緒に行くグループを作ろう" onClose={closeModal}/>
        </div>
      )}
    </div>
  );
};

export default GroupMenu;
